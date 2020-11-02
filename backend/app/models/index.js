// const dbConfig = require('../config/db.config')

// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// const db = {}
// db.mongoose = mongoose
// db.url = dbConfig.url
// db.banner = require('./banner.model')(mongoose)

// module.exports = db
const dbConfig = require('../config/db.config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.tutorials = require('./tutorial.model')(mongoose)

module.exports = db