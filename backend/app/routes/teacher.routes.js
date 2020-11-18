module.exports = app => {
  const teachers = require("../controllers/teacher.controller")
  var router = require("express").Router()
  // Create a new Teacher
  router.post("/", teachers.create)

  //Retrieve all Teachers
  router.get("/", teachers.findAll)

  // Retrieve all published Teachers
  // router.get("/published", Teachers.findAllPublished)

  // Retrieve a single Teacher with id
  router.get("/:id", teachers.findOne)

  // Update a Teacher with id
  router.put('/:id', teachers.update)

  // Delete a Teacher with id
  router.delete('/:id', teachers.delete)

  // Delete all Teachers
  router.delete('/', teachers.deleteAll)

  app.use('/api/teachers', router)
}