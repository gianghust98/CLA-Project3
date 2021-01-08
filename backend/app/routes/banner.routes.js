// module.exports = app => {
//   const banners = require("../controllers/banner.controller")
//   var router = require("express").Router()
//   // Create a new Banner
//   router.post("/", banners.create)
//   // Retrieve all published Banners
//   // router.get("/published", Banners.findAllPublished)

//   // Retrieve a single Banner with id
//   router.get("/:id", banners.findOne)

//   // Update a Banner with id
//   router.put('/:id', banners.update)

//   // Delete a Banner with id
//   router.delete('/:id', banners.delete)

//   // Delete all Banners
//   router.delete('/', banners.deleteAll)

//    //Retrieve all Banners
//   router.get("/", banners.findAll)
//   app.use('/api/banners', router)
// }
const mongoose = require('mongoose')
const express = require('express')
const multer = require('multer')
const uuidv4 = require('uuid/v4')
const router = express.Router()

const DIR = './public/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR)
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, uuidv4() + '-' + filename)
  }
})

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg, .jpeg format allowed!'))
    }
  }
})

// Banner model
let Banner = require('../models/banner.model')

router.post('/uploadBanner', upload.single('bannerImage'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const banner = new Banner({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    bannerImage: url + '/public/' + req.file.filename
  })
  banner.save().then(result => {
    res.status(201).json({
      message: 'Banner uploaded successfully',
      bannerCreated: {
        _id: result._id,
        bannerImage: result.bannerImage
      }
    })
  }).catch(err => {
    console.log(err),
    res.status(500).json({
      error: err
    })
  })
})

router.get("/bannerImage", (req, res, next) => {
  Banner.find().then(data => {
    res.status(200).json({
      message: 'Banner image retrieved successfully',
      banners: data
    })
  })
})

module.exports = router