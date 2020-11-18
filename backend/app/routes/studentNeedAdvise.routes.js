module.exports = app => {
  const students = require("../controllers/studentNeedAdvise.controller")
  var router = require("express").Router()
  // Create a new StudentsNeedAdvisory
  router.post("/", students.create)

  //Retrieve all StudentsNeedAdvisory
  router.get("/", students.findAll)

  // Retrieve a single StudentNeedAdvisory with id
  router.get("/:id", students.findOne)

  // Update a StudentNeedAdvisory with id
  router.put('/:id', students.update)

  // Delete a StudentNeedAdvisory with id
  router.delete('/:id', students.delete)

  // Delete all StudentsNeedAdvisory
  router.delete('/', students.deleteAll)

  app.use('/api/students', router)
}