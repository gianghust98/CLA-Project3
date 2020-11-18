module.exports = mongoose => {
  var schema = mongoose.Schema(
    { 
      question: String,
      imageUrl: String,
      choice1: String,
      choice2: String,
      choice3: String,
      choice4: String,
      correct: String,
      explanation: String,
      status: Number
    },
    { timestamps: true }
  )
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const Test = mongoose.model("test", schema)
  return Test
}
