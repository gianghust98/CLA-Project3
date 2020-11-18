const db = require('../models')
const CourseGroup = db.course_groups

// Create and Save a new CourseGroup
exports.create = (req, res) => {
  // Create a CourseGroup
  const courseGroup = new CourseGroup({
    name: req.body.name,
  })
  // Save courseGroup in the database
  courseGroup
    .save(courseGroup)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the CourseGroup."
      })
    })
}

// Retrieve all CoursesGroup from the database
exports.findAll = (req, res) => {
  CourseGroup.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving CoursesGroup."
      })
    })
}

// Find a singer CourseGroup with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  CourseGroup.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found CourseGroup with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving CourseGroup with id = " + id })
    })
}

// Update a CourseGroup by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  CourseGroup.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update CourseGroup with id = ${id}. Maybe CourseGroup was not found`
        })
      } else res.send({ message: "CourseGroup was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating CourseGroup with id = " + id
      })
    })
}

// Delete a CourseGroup with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  CourseGroup.findByIdAndRemove(id, { useFindAndModify: false })
  .then(data => {
    if(!data) {
      res.status(404).send({
        message: `Cannot delete CourseGroup with id = ${id}`
      })
    } else {
      res.send({
        message: "CourseGroup was deleted successfully!"
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete CourseGroup with id = " + id
    })
  })
}

// Deleted all CoursesGroup from the database
exports.deleteAll = (req, res) => {
  CourseGroup.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} CoursesGroup were deleted successfully!`
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 
        err.message || "Some error occurred while removing all CoursesGroup"
    })
  })
}