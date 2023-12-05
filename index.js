// displayCarDetails function hadil 

const carReviewListElement = document.getElementById('review-list')
const carImageElement = document.getElementById('car-image')
const carNameElement = document.getElementById('car-name')
const carDecriptionElement = document.getElementById('car-description')
const carReviewElement = document.getElementById('car-review')
const car8hrpriceElement = document.getElementById('car-price8')
const car24hrpriceElement = document.getElementById('car-price24')

let currentCar

function displayCarDetails(cars) {
        currentCar = cars
        carImageElement.src = cars.image_url
        carNameElement.textContent = cars.name    
        carDescriptionElement.textContent = cars.description    
        careighthrpriceElement.textContent = "$" + cars.eighthrprice
        cartwofourhrpriceElement.textContent = "$" + cars.twofourhrprice
    
        carReviewListElement.innerText = ""

        cars.reviews.forEach(review => {
            liReviewElement = document.createElement('Li')
            liReviewElement.textContent = review 
            carReviewListElement.appendChild(liReviewElement)

        })
}

// displayCarDetails(car[0])   declare in fetch
// - hadil add review code here

// Event listener for the review form submission
const reviewForm = document.getElementById('review-form')


reviewForm.addEventListener('submit', event => {
    // Prevent the form from submitting
    event.preventDefault()
    
    const reviewInput = document.getElementById('review')
    const review = reviewInput.value.trim()
    const reviewList = document.getElementById('review-list')


    if (review) {
        const reviewItem = document.createElement('li')
        reviewItem.textContent = review
        document.getElementById('review-list').appendChild(reviewItem)
        reviewInput.value = '';


        reviewItem.addEventListener('click', () => {
            reviewList.removeChild(reviewItem)
        });  
    }

});