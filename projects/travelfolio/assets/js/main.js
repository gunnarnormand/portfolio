const app = (function() {
	const $searchForm = document.querySelector('#search-form');
	const $placesList = document.querySelector('#places-list');
	const $myModalLabel= document.querySelector('#myModalLabel');
	const $placeType = document.querySelector('.place-type');
	const $placeTypeForm = document.querySelector('#placeTypeForm');	
	const $reviewForm = document.querySelector('#review-form');
	const $reviewsList = document.querySelector('#reviews-list');
	const $reviewModalPlace = document.querySelector('#myModalLabel2');		
	// try to get from localStorage if not there fall back to empty array
	const places = JSON.parse(localStorage.getItem('places')) || [];

	// const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

	let reviewPlaceIndex = -1; // while creating a new review, this tells us what place it should be attached to


	const init = function() {	
		controller();
	}

	const controller = function() {


		function savePlacesToLocalStorage() {
			localStorage.setItem('places', JSON.stringify(places));
		}

		function addPlace(e) {
			e.preventDefault();
			const $placesInput = this.querySelector('[name=place]');
			const placeText = $placesInput.value;
			placeText.trim();
			const place = {
				placeText,
				deleted: false,
				reviews: []
			}
			if (placeText.length > 0) {
				places.push(place);
				refreshPlaces(places, $placesList);
				savePlacesToLocalStorage();
				this.reset();
			} else {
				$placesInput.focus();
			}	
		}

		function addReview(e) {
			e.preventDefault();

			const formInfo = new FormData($reviewForm);
			const formEntries = {};
			
			for(let inputInfo of formInfo.entries()){
				// console.log(inputInfo);
				formEntries[inputInfo[0]] = inputInfo[1];
			}
			
			// console.log(formInfo);
			// console.log(formEntries);

			places[reviewPlaceIndex].reviews.push( formEntries );
			savePlacesToLocalStorage();

			$reviewForm.reset();

			$placeType.selectedIndex = -1;			
			$('#myModal').modal('hide');

			// console.log('review form reset');



			refreshPlaces(places, $placesList);
			refreshReviews(places[reviewPlaceIndex].reviews, $reviewsList);
				
		}

		function refreshPlaces(places = [], placesList) {

			placesList.innerHTML = places.map((place, i) => {
				if (place.deleted) return; 
				return `
					<div class="col-md-8 col-lg-7 mx-auto float-xs-none white z-depth-1 py-2 px-2 animated slideInDown">
						<h2 class="h2-responsive"><strong>${place.placeText}</strong></h2>
						<h3><a data-index="${i}" class="show-reviews" name="showreviewbtn" data-toggle="modal" data-target=".modal2" >(${place.reviews.length} reviews)</a></h3>			
						<div class="card-block">
			                <div class="text-center">
			                    <button type="button" name="addreviewbtn" data-index=${i} data-toggle="modal" data-target="#myModal" class="btn btn-primary waves-effect btn-block">add review</button>
			                    <button type="button" name="deleted" data-index=${i} class="btn btn-sm btn-secondary waves-effect btn-block" >remove</button>
			                </div>
				        </div>
			        </div> 
				`;
			}).join('');

			// console.clear();
			// console.table(places);
		}

		function refreshReviews(reviews, reviewsList) {
			// console.log(reviewsList);

			reviewsList.innerHTML = reviews.map((review, i) => {
				return `	
					<div class="card card-block">
					    <h2 style="font-size:1.5rem" class="card-title">${review.name}</h2>
					    <p style="font-weight:300;" class="card-text">${review.review}</p>
					    <div class="flex-row">
					        <a class="card-link">Liked: ${review.recommend}</a>
					        <a class="card-link">Rating: ${review.rating}/5</a>
					        <a class="card-link">Price: ${review.price}</a>
					    </div>
					</div>
				`
			}).join('');

			//console.table(reviews);	
		}


		function setDeleted(e) {
			if(!e.target.matches('[name=deleted]')) return; //skip this unless its a deleteButton
			
			const el = e.target;
			const index = el.dataset.index;
			places[index].deleted = !places[index].deleted;
			savePlacesToLocalStorage();
			refreshPlaces(places, $placesList);
		}

		function setupReviewTitle(e) {
			if(!e.target.matches('[name=addreviewbtn]')) return;

			const el = e.target;
			const index = el.dataset.index;

			$myModalLabel.innerHTML = `Create a review for ${places[index].placeText}`;

			refreshPlaces(places, $placesList);
		}

		function storeReviewPlaceIndex(e) {
			if(!e.target.matches('[name=addreviewbtn]')) return;

			const el = e.target;
			const index = el.dataset.index;

			reviewPlaceIndex = index;
		}

		function showReviews(e) {
			if(!e.target.matches('[name=showreviewbtn]')) return;
			const el = e.target;
			const index = el.dataset.index;

			

			let currentReviews = places[index].reviews;
			//console.log(currentReviews.length);
			if(currentReviews.length > 0) {
				$reviewModalPlace.innerHTML = `Reviews for ${places[index].placeText}`;
			} else {
				$reviewModalPlace.innerHTML = `You have no reviews for ${places[index].placeText}`;
			}

			refreshReviews(places[index].reviews, $reviewsList);
		}

		function setupReviewForm(e) {
			e.preventDefault();

			const $controlLabel = document.querySelector('.control-label');
			$controlLabel.innerHTML = `Make your review for the ${$placeType.value} `;


			const dfReview = {
				name: 'name',
				review: 'review',
				rating: 'rating',
				price: 'price',
				recommend: 'would you recommend?',
				getFormInfo: function() {
					return `
						<div class="md-form">
						    <input name="name" type="text" class="form-control">
						    <label>${this.name}</label>
						</div>

						<div class="md-form">
						    <textarea name="review" type="text" class="md-textarea"></textarea>
						    <label>${this.review}</label>
						</div>

						<select name="price"  class="browser-default">
						    <option value="" disabled selected>${this.price}</option>
						    <option value="$">$</option>
						    <option value="$$">$$</option>
						    <option value="$$$">$$$</option>
						</select>
						<i class="bar"></i>	

						<select name="rating"  class="browser-default">
						    <option value="" disabled selected>${this.rating}</option>
						    <option value="1">terrible</option>
						    <option value="2">decent</option>
						    <option value="3">ok</option>
						    <option value="4">good</option>
						    <option value="5">excellent</option>
						</select>
						<i class="bar"></i>
						
						<p>${this.recommend}</p>
						
						<div class="btn-group" data-toggle="buttons">
						  <label class="btn btn-primary">
						    <input type="radio" name="recommend" id="option2" autocomplete="off" value="Yes"><i class="fa fa-thumbs-up right"></i>
						  </label>
						  <label class="btn btn-primary">
						    <input type="radio" name="recommend" id="option3" autocomplete="off" value="No"><i class="fa fa-thumbs-down right"></i>
						  </label>
						</div>	
						
						<div class="text-right">
						    <button type="submit" name="save" class="btn btn-primary">save</button>
						</div>
					`
				}
			}

			const restaurantReview = Object.create(dfReview);

			restaurantReview.name = 'Name of restaurant';
			restaurantReview.review = 'Review of restaurant';
			restaurantReview.rating = 'Restaurant rating';
			restaurantReview.price = 'price';
			restaurantReview.getRestaurantFormInfo = function() {
				return restaurantReview.getFormInfo();
			}

			const hotelReview = Object.create(dfReview);

			hotelReview.name = 'Name of hotel';
			hotelReview.review = 'Review of hotel';
			hotelReview.rating = 'Hotel rating';
			hotelReview.price = 'price';
			hotelReview.getHotelFormInfo = function() {
				return hotelReview.getFormInfo();
			}

			const barReview = Object.create(dfReview);

			barReview.name = 'Name of bar';
			barReview.review = 'Review of bar';
			barReview.rating = 'Bar rating';
			barReview.price = 'price';
			barReview.getBarFormInfo = function() {
				return barReview.getFormInfo();
			}

			const attractionReview = Object.create(dfReview);

			attractionReview.name = 'Name of attraction';
			attractionReview.review = 'Review of attraction';
			attractionReview.rating = 'Attraction rating';
			attractionReview.price = 'price';
			attractionReview.getAttractionFormInfo = function() {
				return attractionReview.getFormInfo();
			}

			const reviewType = e.target.value;

			// console.log(reviewType);

			if (reviewType === 'restaurant') {
				$reviewForm.innerHTML = restaurantReview.getRestaurantFormInfo();
			} else if (reviewType === 'hotel') {
				$reviewForm.innerHTML = hotelReview.getHotelFormInfo();
			} else if (reviewType === 'bar') {
				$reviewForm.innerHTML = barReview.getBarFormInfo();
			} else if (reviewType === 'attraction') {
				$reviewForm.innerHTML = attractionReview.getAttractionFormInfo();
			} else if (reviewType === 'uncategorized') {
				$reviewForm.innerHTML = dfReview.getFormInfo();
			}
		}

		refreshPlaces(places, $placesList);
		$searchForm.addEventListener('submit', addPlace);
		$placesList.addEventListener('click', setDeleted);
		$placesList.addEventListener('click', setupReviewTitle);
		$placesList.addEventListener('click', storeReviewPlaceIndex);
		
		$placeType.addEventListener('change', setupReviewForm);

		$reviewForm.addEventListener('submit', addReview);

		$placesList.addEventListener('click', showReviews);
	}

	return {
		init: init,
		places: places
	}
})();

window.onload = function() {
  app.init(); 
};



