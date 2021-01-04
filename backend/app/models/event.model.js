var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema ({
   
    title: String,
    time: String,
    place: String,
    ticket: String,
    description: String,
    short_description: String,
    thumbnail: String,
    status: Number 
  
})
var Event = mongoose.model("events", eventSchema);
module.exports = Event;
