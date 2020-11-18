module.exports = app => {
  const tests = require("../controllers/test.controller")
  var router = require("express").Router()
  // Create a new Test
  router.post("/", tests.create)

  //Retrieve all Tests
  router.get("/", tests.findAll)

  // Retrieve a single Test with id
  router.get("/:id", tests.findOne)

  // Update a Test with id
  router.put('/:id', tests.update)

  // Delete a Tests with id
  router.delete('/:id', tests.delete)

  // Delete all Tests
  router.delete('/', tests.deleteAll)

  app.use('/api/tests', router)
}