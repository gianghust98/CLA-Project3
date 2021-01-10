module.exports = app => {
  const studentneedadvice = require("../controllers/studentNeedAdvice.controller")
  var router = require("express").Router()
  // Create a new StudentsNeedAdvisory
  router.post("/", studentneedadvice.create)

  //retrieve all students who needs advice
  router.get("/get", studentneedadvice.findAll)

  app.use('/api/studentsneedadvice', router)
}