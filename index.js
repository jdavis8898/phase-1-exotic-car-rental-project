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

getCars(url)
