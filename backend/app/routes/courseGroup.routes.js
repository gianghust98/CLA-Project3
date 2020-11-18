module.exports = app => {
  const courseGroups = require("../controllers/courseGroup.controller")
  var router = require("express").Router()
  // Create a new CourseGroup
  router.post("/", courseGroups.create)

  //Retrieve all CourseGroups
  router.get("/", courseGroups.findAll)

  // Retrieve a single CourseGroup with id
  router.get("/:id", courseGroups.findOne)

  // Update a CourseGroup with id
  router.put('/:id', courseGroups.update)

  // Delete a CourseGroup with id
  router.delete('/:id', courseGroups.delete)

  // Delete all CourseGroup
  router.delete('/', courseGroups.deleteAll)

  app.use('/api/courseGroups', router)
}