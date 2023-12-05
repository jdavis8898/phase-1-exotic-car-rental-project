const url = "http://localhost:3000/cars"

// Variables mainly used for displayCarDetails()
const carReviewListElement = document.getElementById('review-list')
const carImageElement = document.getElementById('car-image')
const carNameElement = document.getElementById('car-name')
const carDescriptionElement = document.getElementById('car-description')
const carReviewElement = document.getElementById('car-review')
const car8hrpriceElement = document.getElementById('eighthr-price')
const car24hrpriceElement = document.getElementById('twofour-price')
const carDetailAvailableElement = document.getElementById('available')
const differentPrices = document.querySelectorAll('details')


// Variables mainly used for addCar()
const carForm = document.querySelector("div.car-details form#car-form")
const carNameInput = document.querySelector("form#car-form textarea#car-name")
const carDescriptionInput = document.querySelector("form#car-form textarea#car-description")
const carImgInput = document.querySelector("form#car-form textarea#car-image")
// const carPrice8Input = document.querySelector("form#car-form textarea#car-price8")
// const carPrice24Input = document.querySelector("form#car-form textarea#car-price24")
const usernameInput = document.querySelector("form#car-form textarea#username")

// Variables mainly used for createNavBar()
const carList = document.querySelector("#car-list")

// Variables mainly used for deleteCar()
const carDetails = document.querySelector(".car-details")

// Variables mainly used for addReview()
const reviewForm = document.getElementById('review-form')
const reviewInput = document.getElementById('review')

let currentCar
let carsCopy
let reviewListCopy

function getCars(url)
{
    fetch(url)
    .then(resp => resp.json())
    .then(carsData => 
        {
            carsCopy = carsData
            createNavBar(carsData)
            displayCarDetails(carsData[0])
            addReview()
            addCar()
            deleteCar()
        })
}

function createNavBar(cars)
{

    carList.innerHTML = ""

    cars.forEach(car => 
        {
            navImg = document.createElement("img")
            navImg.src = car.image_url
            navImg.className = "Nav-Image"
            carList.appendChild(navImg)

            navImg.addEventListener("click", () => displayCarDetails(car))
        })
}

function displayCarDetails(cars) {
        currentCar = cars
        reviewListCopy = cars.reviews
        carImageElement.src = cars.image_url
        carNameElement.textContent = cars.name    
        carDescriptionElement.textContent = cars.description    
        // car8hrpriceElement.textContent = "$" + cars.eighthrprice
        // car24hrpriceElement.textContent = "$" + cars.twofourhrprice
    
        carReviewListElement.innerText = ""

        cars.reviews.forEach(review => {
            liReviewElement = document.createElement('Li')
            liReviewElement.textContent = review 
            carReviewListElement.appendChild(liReviewElement)

        })
}


// Event listener for the review form submission
function addReview()
{

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
    })
}

function addCar()
{
    carForm.addEventListener("submit", e => 
    {
        e.preventDefault()

        newCarName = carNameInput.value
        newCarDescription = carDescriptionInput.value
        newCarImg = carImgInput.value
        // newCarPrice8 = carPrice8Input.value
        // newCarPrice24 = carPrice24Input.value
        newUser = usernameInput.value

        if(newUser.toLowerCase() === "admin")
        {

            newCar = {
                name: newCarName,
                description: newCarDescription,
                image_url: newCarImg,
                reviews: [],
                eighthrprice: "$200",
                twofourhrprice: "$500",
                status: "Available",
                user: newUser
            }
        }

        else
        {
            newCar = {
                name: newCarName,
                description: "Requested",
                image_url: "data:image/png;base64,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",
                reviews: [],
                eighthrprice: "Requested",
                twofourhrprice: "Requested",
                status: "Requested",
                user: newUser
            }
        }

        fetch(url,
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then(resp => 
            {
                if(resp.ok)
                {
                    resp.json().then(newCar =>
                        {
                            carsCopy.push(newCar)
                            createNavBar(carsCopy)
                            displayCarDetails(newCar)
                        })
                    }
                else
                {
                    alert("Error: Unable to add new car!")
                }  
            })

        carForm.reset()
    })
}

function deleteCar()
{
    const deleteButton = document.createElement("input")
    deleteButton.type = "submit"
    deleteButton.value = "Delete Car"
    deleteButton.style.background = "#DB1200"
    carDetails.appendChild(deleteButton)



    deleteButton.addEventListener("click", () => 
    {
        if(usernameInput.value.toLowerCase() === currentCar.user || usernameInput.value.toLowerCase() === "admin")
        {
            fetch(`${url}/${currentCar.id}`, 
            {
                method: "DELETE"
            })
            .then(resp => 
                {
                    if(resp.ok)
                    {
                        carsCopy = carsCopy.filter(car => 
                            {
                                return currentCar.id !== car.id
                            })
                        displayCarDetails(carsCopy[0])
                        createNavBar(carsCopy)
                        alert("Car deleted!")
                    }

                    else
                    {
                        alert("Error: Unable to delete car!")
                    }
            })
        }
        
        else
        {
            alert("Error: Incorrect username!  Please try again!")
        }

    carForm.reset()
    })
}

getCars(url)