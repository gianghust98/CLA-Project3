module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      name: String,
      phone: String,
      email: String,
      message: String,
      testCore: Number
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const StudentNeedAdvisory = mongoose.model("studentNeedAdvise", schema)
  return StudentNeedAdvisory
}
