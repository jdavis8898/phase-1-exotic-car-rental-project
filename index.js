const url = "http://localhost:3000/cars"
const carList = document.querySelector("#car-list")

function getCars(url)
{
    fetch(url)
    .then(resp => resp.json())
    .then(carsData => 
        {
            createNavBar(carsData)
        })
}

function createNavBar(cars)
{
    cars.forEach(car => 
        {
            carList.innerHTML = ""
            navImg = document.createElement("img")
            navImg.src = car.image_url
            navImg.className = "Nav-Image"
            carList.appendChild(navImg)

            navImg.addEventListner("click", () => displayCarDetails(car))
        })
}

getCars(url)
