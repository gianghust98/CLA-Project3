const db = require('../models')
const New = db.news

// Create and Save a new New
exports.create = (req, res) => {
  // Create a New
  const newEvent = new New({
    title: req.body.title,
    content: req.body.content,
    shortDescription: req.body.shortDescription,
    publishedDate: req.body.publishedDate,
    thumbnail: req.body.thumbnail,
    newType: req.body.newType
  })
  // Save new in the database
  newEvent
    .save(newEvent)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the New."
      })
    })
}

// Retrieve all News from the database
exports.findAll = (req, res) => {
  New.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving news."
      })
    })
}

// Find a singer New with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  New.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found New with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving New with id = " + id })
    })
}

// Update a New by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  New.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update New with id = ${id}. Maybe New was not found`
        })
      } else res.send({ message: "New was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating New with id = " + id
      })
    })
}

// Delete a New with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  New.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot delete New with id = ${id}`
        })
      } else {
        res.send({
          message: "New was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete New with id = " + id
      })
    })
}

// Deleted all News from the database
exports.deleteAll = (req, res) => {
  New.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} News were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all News"
      })
    })
}