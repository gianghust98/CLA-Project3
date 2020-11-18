const dbConfig = require('../config/db.config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.banners = require('./banner.model')(mongoose)
db.courses = require('./course.model')(mongoose)
db.course_groups = require('./courseGroup.model')(mongoose)
db.events = require('./event.model')(mongoose)
db.news = require('./new.model')(mongoose)
db.students_need_advise = require('./studentNeedAdvise.model')(mongoose)
db.teachers = require('./teacher.model')(mongoose)
db.tests = require('./test.model')(mongoose)

module.exports = db