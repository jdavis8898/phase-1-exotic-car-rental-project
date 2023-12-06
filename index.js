// - hadil add review code here

// Event listener for the review form submission
const reviewForm = document.getElementById('review-form')
const reviewInput = document.getElementById('review')
let carsCopy
let currentCar
let reviewListCopy

reviewForm.addEventListener('submit', event => {
    // Prevent the form from submitting
    event.preventDefault()

    reviewListCopy.push(reviewInput.value)

    fetch(`http://localhost:3000/cars/${currentCar.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ reviews: reviewListCopy }),
    })
    
    .then(res => res.json())
    .then(updatedCar => {
        carsCopy = carsCopy.map(car => {
            if(car.name === updatedCar.name){
                return updatedCar
            }
            else{
                return car
            }
        })
        displayCarDetails(updatedCar)
        createNavBar(carsCopy)
    })
    reviewInput.value = ""
});