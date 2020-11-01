const db = require('../models')
const Banner = db.banners

// Create and Save a new Banner
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({ message: "Content can not be empty" })
  //   return
  // }
  // Create a Banner
  const banner = new Banner({
    banner_name: req.body.banner_name,
    image_url: req.body.image_url
    // status: req.body.status
  })
  // Save banner in the database
  banner
    .save(banner)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Banner."
      })
    })
}

// Update a Banner by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }
  const id = req.params.id

  Banner.findByIdAndUpdate(id, req.body, { useFindAndModify: false } )
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Banner with id = ${id}. Maybe Banner was not found`
        })
      } else res.send({ message: "Banner was updated successfully" })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Banner with id = " + id
      })
    })
}

// Delete a Banner with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Banner.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot delete Banner with id = ${id}`
        })
      } else {
        res.send({
          message: "Banner was deleted successfully!"
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Banner with id = " + id
      })
    })
}

// Deleted all Banners from the database
exports.deleteAll = (req, res) => {
  Banner.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Banners were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while removing all Banners"
      })
    })
}