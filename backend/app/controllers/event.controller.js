const db = require('../models')
const Event = db.events

// Create and Save a new Event
exports.create = (req, res) => {
  // Create a Event
  const event = new Event({
    title: req.body.title,
    time: req.body.time,
    place: req.body.place,
    ticket: req.body.ticket,
    description: req.body.description,
    shortDescription: req.body.shortDescription,
    thumbnail: req.body.thumbnail,
    status: req.body.status
  })
  // Save event in the database
  event
    .save(event)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Event."
      })
    })
}

// Retrieve all Events from the database
exports.findAll = (req, res) => {
  Event.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving Events."
      })
    })
}

// Find a singer Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Event.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Event with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Event with id = " + id })
    })
}

// Update a Event by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Event with id = ${id}. Maybe Event was not found`
        })
      } else res.send({ message: "Event was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Event with id = " + id
      })
    })
}

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Event.findByIdAndRemove(id, { useFindAndModify: false })
  .then(data => {
    if(!data) {
      res.status(404).send({
        message: `Cannot delete Event with id = ${id}`
      })
    } else {
      res.send({
        message: "Event was deleted successfully!"
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Event with id = " + id
    })
  })
}

// Deleted all Events from the database
exports.deleteAll = (req, res) => {
  Event.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Events were deleted successfully!`
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 
        err.message || "Some error occurred while removing all Events"
    })
  })
}