// - hadil add review code here

// Event listener for the review form submission
const reviewForm = document.getElementById('review-form')
const reviewInput = document.getElementById('review')

reviewForm.addEventListener('submit', event => {
    // Prevent the form from submitting
    event.preventDefault()

    reviewListCopy.push(reviewInput.value)

    fetch(`http://localhost:3000/cars/${currentCar.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ review: reviewListCopy }),
    })
    
   .then(res => res.json())
   .then(updatedCar => {
        displayCarDetails(updatedCar)
   })

});