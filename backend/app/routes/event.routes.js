const e = require("express")

module.exports = app => {
  const events = require("../controllers/event.controller")
  var router = require("express").Router()
  // Create a new Event
  router.post("/addevent", events.create)

  //Retrieve all Events
  router.get("/", events.findAll)

  // Retrieve a single Event with id
  router.get("/:id", events.findOne)

  // Update a Event with id
  router.put("/update/:id", events.update)

  // Delete a Event with id
  router.delete("/delete/:id", events.delete)

  // Delete all Events
  router.delete("/delete/all", events.deleteAll)

  app.use("/api/events", router)
}