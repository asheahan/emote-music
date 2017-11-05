/**
 * Module for emotion route handlers
 * @requires lodash
 * @requires services/emotion-service
 */

// Dependencies
const _ = require('lodash');
const emotionService = require('../../services/emotion-service');

/**
 * Process image by sending to Cognitive API
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
exports.processImage = (req, res, next) => {
  emotionService
    .getFaceEmotion(req.file.buffer)
    .then(data => {
      let info = JSON.parse(data);
      let dat = {
        faceRectangle: info[0].faceRectangle,
        scores: [
          {
            axes: _.map(_.keys(info[0].scores), key => {
              return {
                axis: key,
                value: info[0].scores[key]
              };
            })
          }
        ],
        rawScores: info[0].scores
      };
      res.json({
        status: 'SUCCESS',
        message: 'File processed',
        data: dat
      });
    })
    .catch(err => {
      console.error(`Error getting emotions: ${err.message}`);
      res.json({
        status: 'ERROR',
        message: err.message
      });
    });
};
