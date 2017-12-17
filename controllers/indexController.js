const mongoose = require('mongoose');

// import models
// const SomeModel = mongoose.model('SomeModel');

const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

exports.sayHi = (req, res) => {
  res.render('home/index', { hi: 'howdy hoe!' });
};
