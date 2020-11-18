const dbConfig = require('../config/db.config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.teachers = require('./teacher.model')(mongoose)
db.banners = require('./banner.model')(mongoose)

module.exports = db