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