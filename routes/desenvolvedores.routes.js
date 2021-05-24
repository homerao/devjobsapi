var express = require('express');
var router = express.Router();
const path = require('path')
const multer = require('multer')
const {check, validationResult, body} = require('express-validator');
const controller = require('../controllers/desenvolvedor.controller')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
  }

})
let upload = multer({storage: storage})
//middleware
const mid = (req, res, next)=>{
 body('url')
 

  next()
}

/* GET users listing. */
router.get('/find.all', function(req, res, next) {
  res.json('find all');
});

router.get('/find.by.id', function(req, res, next) {
  res.json('find by id');
});

router.get('/find.by.name', function(req, res, next) {
  res.json('find by name');
});

router.get('/find.by.skill', function(req, res, next) {
  res.json('skill');
});

router.get('/update',function(req, res, next) {
  res.json('update');
});

router.post('/create',  controller.create)
module.exports = router;
