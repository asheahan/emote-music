'use strict';

const 
  express = require('express'),
  fs = require('fs'),
  router = express.Router(),
  multer = require('multer');
let upload = multer({ storage: multer.memoryStorage() });

let emotionService = require('../services/emotion-service'),
  faceService = require('../services/face-service');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Emote Music' });
// });

router.post('/image/upload', upload.single('file'), function (req, res) {
  // faceService.getFaceAttributes(req.file.buffer)
  emotionService.getFaceEmotion(req.file.buffer)
    .then(data => {
      let info = JSON.parse(data);
      console.log(info);
      res.json({
        status: 'SUCCESS',
        message: 'File processed',
        data: info
      });
    })
    .catch(err => {
      res.json({
        status: 'ERROR',
        message: err.message
      });
    });
});

module.exports = router;
