const carForm = document.querySelector("div.car-details form#car-form")
const carNameInput = document.querySelector("form#car-form textarea#car-name")
const carDescriptionInput = document.querySelector("form#car-form textarea#car-description")
const carImgInput = document.querySelector("form#car-form textarea#car-image")
const carPrice8Input = document.querySelector("form#car-form textarea#car-price8")
const carPrice24Input = document.querySelector("form#car-form textarea#car-price24")
const usernameInput = document.querySelector("form#car-form textarea#username")
let carsCopy

function addCar()
{
    carForm.addEventListener("submit", e => 
    {
        e.preventDefault()

        newCarName = carNameInput.value
        newCarDescription = carDescriptionInput.value
        newCarImg = carImgInput.value
        newCarPrice8 = carPrice8Input.value
        newCarPrice24 = carPrice24Input.value
        newUsername = usernameInput.value

        if(newUsername.lowercase() === "admin")
        {
            newCar = {
                name: newCarName,
                description: newCarDescription,
                image_url: newCarImg,
                reviews: [],
                eighthrprice: newCarPrice8,
                twofourhrprice: newCarPrice24,
                status: "Available"
            }
        }

        else
        {
            newCar = {
                name: newCarName,
                description: "Requested",
                image_url: newCarImg,
                reviews: [],
                eighthrprice: "Requested",
                twofourhrprice: "Requested",
                status: "Requested"
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
                if(resp.ok === true)
                {
                    resp.json().then(newCar =>
                        {
                            carsCopy.push(newCar)
                            createNavBar(carsCopy)
                            displayDetails(newCar)
                        })
                    }
                else
                {
                    alert("Error: Unable to add new car!")
                }  
            })
    })
}