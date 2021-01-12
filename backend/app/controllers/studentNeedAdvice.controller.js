const mongoose = require("mongoose");
var Student = require("../models/studentNeedAdvice.model");

// Create and Save a new student who needs advice
exports.create = (req, res) => {
  const student = new Student({
    fullname: req.body.fullname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    askfield: req.body.askfield,
  })
  student
    .save()
    .then(() => {
      res.send({success: true , message: "Register for advice succeed!"})
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while a student registers for advice."
      })
    })
}
exports.findAll = (req, res) => {
  Student.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving news."
      })
    })
}

