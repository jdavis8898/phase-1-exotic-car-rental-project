// displayCarDetails function hadil 

const carReviewListElement = document.getElementById('review-list')
const carImageElement = document.getElementById('car-image')
const carNameElement = document.getElementById('car-name')
const carDecriptionElement = document.getElementById('car-description')
const carReviewElement = document.getElementById('car-review')
const car8hrpriceElement = document.getElementById('eight-hour')
const car24hrpriceElement = document.getElementById('twofour-hour')
const carDetailAvailableElement = document.getElementById('available')
const differentPrices = document.querySelectorAll('details')


let currentCar

function displayCarDetails(cars) {
        currentCar = cars
        reviewListCopy = cars.reviews
        carImageElement.src = cars.image_url
        carNameElement.textContent = cars.name    
        carDescriptionElement.textContent = cars.description 
        
        const eightSumElement = document.createElement('summary')
        eightSumElement.textContent = cars.eighthrprice
        car8hrpriceElement.appendChild(eightSumElement)

        const twofourSumElement = document.createElement('summary')
        twofourSumElement.textContent = cars.twofourhrprice
        car24hrpriceElement.appendChild(twofourSumElement)
        differentPrices.forEach(price => {
            price.addEventListener('toggle', togglePrices()) 
        })
        carDetailAvailableElement.innerText = cars.available ? "Available" : "Unavailable"; 
    
        carReviewListElement.innerText = ""

        cars.reviews.forEach(review => {
            liReviewElement = document.createElement('Li')
            liReviewElement.textContent = review 
            carReviewListElement.appendChild(liReviewElement)

        })

}   

function toggleAvailableButton() {
                
  carDetailAvailableElement.addEventListener("click", () => {
         currentCar.available = !currentCar.available
         carDetailAvailableElement.textContent = currentCar.available? "Available": "Unavailable";
       })

} 

function differentPrices(e) {
    const item = document.querySelector(`[data-id=${e.target.id}]`)
    item.toggleAttribute("hidden")
}

