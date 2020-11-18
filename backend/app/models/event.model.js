module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      title: String,
      time: Number,
      place: String,
      ticket: Number,
      description: String,
      shortDescription: String,
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
  const Event = mongoose.model("event", schema)
  return Event
}
