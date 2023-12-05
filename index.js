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
