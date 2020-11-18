const db = require('../models')
const StudentNeedAdvise = db.students_need_advise

// Create and Save a new student
exports.create = (req, res) => {
  // Create a Student
  const student = new StudentNeedAdvise({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
    testCore: req.body.testCore
  })
  // Save student in the database
  student
    .save(student)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Student."
      })
    })
}

// Retrieve all Students from the database
exports.findAll = (req, res) => {
  StudentNeedAdvise.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving Students."
      })
    })
}

// Find a singer Student with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  StudentNeedAdvise.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Student with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Student with id = " + id })
    })
}

// Update a Student by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  StudentNeedAdvise.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Student with id = ${id}. Maybe Student was not found`
        })
      } else res.send({ message: "Student was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id = " + id
      })
    })
}

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  StudentNeedAdvise.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot delete Student with id = ${id}`
        })
      } else {
        res.send({
          message: "Student was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id = " + id
      })
    })
}

// Deleted all Students from the database
exports.deleteAll = (req, res) => {
  StudentNeedAdvise.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Students were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all Students"
      })
    })
}