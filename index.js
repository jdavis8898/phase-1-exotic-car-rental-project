function deleteCar()
{
    const deleteButton = document.createElement("input")
    deleteButton.type = "submit"
    deleteButton.value = "Delete Car"
    deleteButton.style.background = "#DB1200"
    carDetails.appendChild(deleteButton)



    deleteButton.addEventListener("click", () => 
    {
        if(usernameInput.value.toLowerCase() === currentCar.user)
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