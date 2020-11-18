module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      name: String,
      studentNumber: Number,
      courseFee: Number,
      description: String,
      shortDescription: String,
      roomNumber: Number,
      time: Number,
      totalSession: Number,
      thumbnail: String,
      status: Number 
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const Course = mongoose.model("course", schema)
  return Course
}
