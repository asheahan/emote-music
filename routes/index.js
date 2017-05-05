var express = require('express');
var fs = require('fs');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: '/uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emote Music' });
});

router.post('/image/upload', upload.single('file'), function (req, res) {
  var file = __dirname + '/../uploads/' + req.file.originalname;
  fs.rename(req.file.path, file, function (err) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.json({
        message: 'File uploaded successfully',
        filename: req.file.originalname
      });
    }
  });
});

module.exports = router;
