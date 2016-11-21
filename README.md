# Summary

This is the backend to a photo-sharing website called Snapogram. The project can be found live at: [Snapogram-backend](https://shrouded-gorge-47076.herokuapp.com).

# Tools

- AdonisJS
- Postman (for testing)
- Heroku (for housing the database)

# How to use Snapogram's API

POST /images
This will allow you to create a new photo link.  It takes the following params:
  * Caption: Give your photo a title.
  * URL: Provide link to the picture.
  * Description: You can write a longer description of the photo.

GET /images
This allows you to get all photos in the collection.

GET /images/:id
This allows you to find a specific photo in the collection.  Takes the photo id number.

PUT /images/:id
Allows photos to be updated. Takes the photo id number. Fields that can be edited are:
  * Caption
  * URL
  * Description
  * number of 'Likes' the photo has

DELETE /images/:id
Allows a specific photo to be deleted. Takes the photo id number. 
