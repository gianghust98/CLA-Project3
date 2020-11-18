module.exports = app => {
  const banners = require("../controllers/banner.controller")
  var router = require("express").Router()
  // Create a new Banner
  router.post("/", banners.create)

  //Retrieve all Banners
  router.get("/", banners.findAll)

  // Retrieve all published Banners
  // router.get("/published", Banners.findAllPublished)

  // Retrieve a single Banner with id
  router.get("/:id", banners.findOne)

  // Update a Banner with id
  router.put('/:id', banners.update)

  // Delete a Banner with id
  router.delete('/:id', banners.delete)

  // Delete all Banners
  router.delete('/', banners.deleteAll)

  app.use('/api/banners', router)
}