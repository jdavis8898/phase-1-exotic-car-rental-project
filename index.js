function deleteCar()
{
    const deleteButton = document.createElement("input")
    deleteButton.type = "submit"
    deleteButton.value = "Delete Car"
    deleteButton.style.background = "#DB1200"
    document.body.appendChild(deleteButton)



    deleteButton.addEventListener("click", () => 
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
    })
}