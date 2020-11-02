const db = require('../models')
const Teacher = db.teachers

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty" })
    return
  }
  // Create a Tutorial
  const teacher = new Teacher({
    name: req.body.name,
  })
  // Save tutorial in the database
  teacher
    .save(teacher)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Tutorial."
      })
    })
}

// Retrieve all Tutorials from the database
exports.findAll = (req, res) => {
  const name = req.query.name
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}
  Teacher.find(condition)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}

// Find a singer Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Teacher.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id = " + id })
    })
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  Teacher.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id = ${id}. Maybe Tutorial was not found`
        })
      } else res.send({ message: "Tutorial was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id = " + id
      })
    })
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Teacher.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id = ${id}`
        })
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id = " + id
      })
    })
}

// Deleted all Tutorials from the database
exports.deleteAll = (req, res) => {
  Teacher.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all Tutorials"
      })
    })
}

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.find({ published: true })
//     .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 
//           err.message || "Some error occurred while retrieving tutorials"
//       })
//     })
// }