module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      banner_name: String,
      image_url: String,
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const Banner = mongoose.model("banner", schema)
  return Banner
}
