// begin writing code here

const carName = document.querySelector('#car-name')
const carImage = document.querySelector('#car-image')
const carDescription = document.querySelector('#car-description')
const reviewList = document.querySelector('#review-list')


fetch('http://localhost:3000/cars')
    .then(resp => resp.json())
    .then(cars => {
        console.log(cars)


    })

    function displayCarDetails(car) {
        console.log(car)
        carImage.src = car.image_url
        carName.textContent = car.name
        carDescription.textContent = car.carDescription
            car.reviews.map((review) => {
            console.log(review)

                const reviewLi = document.createElement('Li')
                    reviewLi.textContent = review
                    reviewList.append(reviewLi)

            })
           
    }
