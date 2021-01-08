// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     { bannerImage: String },
//     { timestamps: true }
//   )
//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject()
//     object.id = _id
//     return object
//   })
//   const Banner = mongoose.model("banner", schema)
//   return Banner
// }
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bannerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bannerImage: {
    type: String,
    collection: 'banners'
  }
})

module.exports = mongoose.model('Banner', bannerSchema)