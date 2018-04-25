import { create } from 'domain';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Images = require('../models/index').images;


// REVEAL IMAGE PAGE 
router.get('/images', (req, res) => {
  Images.findById(req.params.id)
    .then(function(images) {
      res.send(images);
      res.send("IMAGES ROUTE WORKS")
    });
});

// UPDATE IMAGE OR ADD COMMENT/TAG
router.put('/:id', (req, res) => {
  Images.findById(req.params.id)
    .then(function(images){
      images.update(getBodyParams(req))
      .then(function(updateImages){
        res.send(updateImages)
      });
    });
});

// DELETE AN IMAGE
router.delete('/:id', (req, res) => {
  Images.findById(req.params.id)
    .then(function(images){
      image.destroy();
      console.log("IMAGE DESTORYED");
    });
});

// INDEX SHOW ALL IMAGES
router.get('/', (req, res) => {
  Images.findAll()
    .then(function(images){
      res.send(images);
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

