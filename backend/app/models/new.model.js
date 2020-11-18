module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      title: String,
      content: String,
      shortDescription: String,
      publishedDate: Date,
      thumbnail: String,
      newType: Number
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const New = mongoose.model("new", schema)
  return New
}
