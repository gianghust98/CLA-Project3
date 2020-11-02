module.exports = app => {
  const teachers = require("../controllers/teacher.controller")
  var router = require("express").Router()
  // Create a new Tutorial
  router.post("/", teachers.create)

  //Retrieve all tutorials
  router.get("/", teachers.findAll)

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished)

  // Retrieve a single Tutorial with id
  router.get("/:id", teachers.findOne)

  // Update a Tutorial with id
  router.put('/:id', teachers.update)

  // Delete a Tutorial with id
  router.delete('/:id', teachers.delete)

  // Delete all Tutorials
  router.delete('/', teachers.deleteAll)

  app.use('/api/teachers', router)
}