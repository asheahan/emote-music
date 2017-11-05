/**
 * Module to define routes for emotions
 * @requires lodash
 * @requires express
 * @requires multer
 * @requires routes/emotion-routes/emotion-routes
 */

// Dependencies
const _ = require('lodash');
const express = require('express');
const multer = require('multer');
const emotionRoutes = require('./emotion-routes');

const emotionRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

module.exports = router => {
  emotionRouter.post(
    '/image',
    upload.single('file'),
    emotionRoutes.processImage
  );

  router.use('/emotions', emotionRouter);
};
