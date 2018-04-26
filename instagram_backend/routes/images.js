const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Image = require('../models/index').image;


// REVEAL IMAGE PAGE 
router.get('/images', (req, res) => {
  Image.findById(req.params.id)
    .then(function(image) {
      res.send(image);
      res.send("IMAGES ROUTE WORKS")
    });
});


// UPDATE IMAGE OR ADD COMMENT/TAG
router.put('/:id', (req, res) => {
  Image.findById(req.params.id)
    .then(function(image){
      image.update(getBodyParams(req))
      .then(function(updateImages){
        res.send(updateImages)
      });
    });
});

// DELETE AN IMAGE
router.delete('/:id', (req, res) => {
  Image.findById(req.params.id)
    .then(function(image){
      image.destroy();
      console.log("IMAGE DESTORYED");
    });
});

// INDEX SHOW ALL IMAGES
router.get('/', (req, res) => {
  Image.findAll()
    .then(function(image){
      res.send(image);
    });
});



// CREATE NEW IMAGE
module.exports = function(multer) {
/* Signup for new acc */
router.post('/images/uploads', upload.array('image', ), (req, res) => {
  res.json({
      Upload: req.files, 
      Description: req.body, 
      Tag: req.body
    });

  });
};

