'use strict'

const Image = use("App/Model/Image")

class ImageController {
  * create (request, response) {
    let newData = request.only('caption', 'url', 'description')

    newData.likes = 0;

    let newImage = yield Image.create(newData)
    response.status(201).json(newImage)
  }

  * index (request, response) {
    let imageList = yield Image.query().select("*").orderBy('created_at', desc)

    response.json(imageList)
  }

//show a single image
  * details (request, response) {
    let id = request.param('id')
    let image = yield Image.findBy('id', id)

    response.status(202).json(image)
  }

  * update (request, response) {
    let id = request.param('id')
    let image = yield Image.findBy('id', id)
    let update = request.only('caption', 'url', 'description', 'likes')

    if (image) {
      image.fill(update)
      yield image.save()
      response.status(202).json(image)
    }
    else {
      response.status(404).json({ error: "Image not found." })
    }
  }

  * delete (request, response) {
  let id = request.param('id')
  let image = yield Image.findBy('id', id)

  if (image) {
    yield image.delete()
    response.status(202).json({ success: "Image successfully deleted" })
  }
  else {
    response.status(404).json({ error: "Image not found." })
  }
  }
}

module.exports = ImageController
