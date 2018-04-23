const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


module.exports = function(multer) {
/* Signup for new acc */
router.post('/images/uploads', upload.array('image', ), (req, res) => {
  res.json({
      Upload: req.files, 
      Description: req.body, 
      Tag: req.body
    });

});


return router;
};