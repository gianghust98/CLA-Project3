module.exports = app => {
  const news = require("../controllers/new.controller")
  var router = require("express").Router()
  // Create a new New
  router.post("/", news.create)

  //Retrieve all News
  router.get("/", news.findAll)

  // Retrieve a single New with id
  router.get("/:id", news.findOne)

  // Update a New with id
  router.put('/:id', news.update)

  // Delete a New with id
  router.delete('/:id', news.delete)

  // Delete all News
  router.delete('/', news.deleteAll)

  app.use('/api/news', router)
}