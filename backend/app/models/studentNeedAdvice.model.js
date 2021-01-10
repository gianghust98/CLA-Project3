var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  fullname: String,
  phonenumber: String,
  email: String,
  askfield: String 
});
var studentNeedAdvice = mongoose.model("studentsneedadvice", studentSchema);
module.exports = studentNeedAdvice;
