# phase-1-exotic-car-rental-project

## Link to Project Pitch Document

https://docs.google.com/document/d/1YZ5cW3FAWz4eWIUKS7Xo-G7Jy8P-wi1AcpsOmau0jfw/edit

## Timeline

Monday: proposal due
Tuesday: HTML, starting json info in there (Both will work on these two items), and start working on js code
Wednesday: Nav bar (Jeffrey), ability to display details (Hadil), add/delete review (Hadil), add/delete car (Jeffrey)
Thursday: Tying username functionality to everything (Hadil will add to the reviews and Jeffrey will add to the cars)
Friday : presentation

## User Stories

MVP: CRUD 
E.g. User will be able to:
GET: User will be able to click through a navigation bar that will consist of pictures of cars and clicking on them will display all of the details on the car
GET: Within the car details section there will be a toggle event that when clicked, will show the different rental prices for the selected car
PATCH: User will be able to fill out a review form and hitting submit will post a new review
POST: Fill out form and submit to add/request car to be added to rental listing
DELETE: Delete car request/posting with a delete button


Stretch Goals:

Within the add car functionality, we will make it so a username is required to submit the form
Also with this username we will tie that to being able to either add a car to the available inventory (admin username) or if this will display as a car request
We will tie this username functionality to deleting cars as well.  Only the admin username will be able to delete all cars and then only people who made a request will be able to delete that specific request.
We will have a toggle button that shows if a car is available or not and the admin should only be able to interact with that
We will also look at making it possible to delete reviews, DELETE


## Test info
{
    "cars": [ 
	    {
	        "id": 1,
	        "name": "Audi R8",
	        "description": "This is a fast car",
	        "img_main": "image link",
	        "img_2": "second image link",
	        "img_3":  "third image link",
	        "status": "Available",
	        "reviews": ["This car is so fast", "Best experience ever", "Drivers really smooth"],
	        "8hrprice": "$1200",
            "24hrprice": "$1300",
			"user": "admin"
        },
        {
            "id": 2,
	        "name": "Aston Martin DB11",
	        "description": "This is another fast car",
	        "img_main": "image link",
	        "img_2": "second image link",
	        "img_3":  "third image link",
	        "status": "Unvailable",
	        "reviews": ["This car is just ok", "Was fun"],
	        "8hrprice": "$1200",
            "24hrprice": "$1300",
			"user": "admin"
        }
    ]
}

"http://localhost:3000/cars"