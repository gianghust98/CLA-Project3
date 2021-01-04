const mongoose = require("mongoose");
var Event = require("../models/event.model");
const CALLBACK_ERR = { success: false, message: "Error!", data: undefined };
// Create and Save a new Event
exports.create = (req, res) => {
  // Create a Event
  const event = new Event({
    title: req.body.title,
    time: req.body.time,
    place: req.body.place,
    ticket: req.body.ticket,
    description: req.body.description,
    short_description: req.body.short_description,
    thumbnail: req.body.thumbnail,
    status: req.body.status
  })
  // Save event in the database
  event
    .save()
    .then(() => {
      res.send({success: true,message: "Tạo thành công!"})
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while creating the Event."
      })
    })
}

// Retrieve all Events from the database
exports.findAll = (req, res) => {
  Event.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while retrieving Events."
      })
    })
}

// Find a singer Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Event.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Event with id " + id })
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Event with id = " + id })
    })
}

// Update a Event by the id in the request
exports.update = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: "Data to update can not be empty"
    })
  }else{
    console.log('req.body: ',req.body );
    const id = req.params.id;
    console.log(id);
    const { title,time,place,ticket,description,short_description} = req.body;
    Event.findByIdAndUpdate(  { _id: id }, { title,time,place,ticket,description,short_description },function (err) {
        if (err) {
          res.send(CALLBACK_ERR);
        } else {
          res.send({ success: true, message: "Update completed!" });
        }
      })
  }
  
    // .then(data => {
    //   if(!data) {
    //     res.status(404).send({
    //       message: `Cannot update Event with id = ${id}. Maybe Event was not found`
    //     })
    //   } else {
    //     //console.log('req.body', req.body);
    //     console.log('data updated: ',data);
    //     res.send({ message: "Event was updated successfully" })
    //   }
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message: "Error updating Event with id = " + id
    //   })
    // })
}

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  console.log('req.params', req.params);
  const eventid = req.params.id;
  Event.findByIdAndRemove({ _id: eventid},function (err) {
    if (!err) {
      return res.send({ success: true, message: "Event deleted successfully!" });
    } else {
      return res.send(CALLBACK_ERR);
    }
  })
  // .then(data => {
  //   if(!data) {
  //     res.status(404).send({
  //       message: `Cannot delete Event with id = ${id}`
  //     })
  //   } else {
  //     res.send({
  //       message: "Event was deleted successfully!"
  //     })
  //   }
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message: "Could not delete Event with id = " + id
  //   })
  // })
}

//Deleted all Events from the database
exports.deleteAll = (req, res) => {
  Event.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Events deleted successfully!`
    })
  })
  .catch(err => {
    res.status(500).send({
      message: 
        err.message || "Some error occurred while removing all Events"
    })
  })
}