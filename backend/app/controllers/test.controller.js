const db = require('../models')
const Test = db.tests

// Create and Save a new Test
exports.create = (req, res) => {
  // Create a Test
  const test = new Test({
    question: req.body.question,
    imageUrl: req.body.imageUrl,
    choice1: req.body.choice1,
    choice2: req.body.choice2,
    choice3: req.body.choice3,
    choice4: req.body.choice4,
    correct: req.body.correct,
    explanation: req.body.explanation,
    status: req.body.status
  })
  // Save test in the database
  test
    .save(test)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Test."
      })
    })
}

// Retrieve all Tests from the database
exports.findAll = (req, res) => {
  Test.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving Tests."
      })
    })
}

// Find a singer Test with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Test.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Test with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Test with id = " + id })
    })
}

// Update a Test by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  Test.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Test with id = ${id}. Maybe Test was not found`
        })
      } else res.send({ message: "Test was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Test with id = " + id
      })
    })
}

// Delete a Test with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Test.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot delete Test with id = ${id}`
        })
      } else {
        res.send({
          message: "Test was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Test with id = " + id
      })
    })
}

// Deleted all Tests from the database
exports.deleteAll = (req, res) => {
  Test.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tests were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all Tests"
      })
    })
}