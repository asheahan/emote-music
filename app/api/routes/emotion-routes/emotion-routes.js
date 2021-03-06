/**
 * Module for emotion route handlers
 * @requires lodash
 * @requires services/emotion-service
 */

// Dependencies
const emotionService = require('../../services/emotion-service')

/**
 * Process image by sending to Cognitive API
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
exports.processImage = (req, res, next) => {
  console.log('processImage')

  emotionService
    .getFaceEmotion(req.file.buffer)
    .then(data => {
      res.json({
        status: 'SUCCESS',
        message: 'File processed',
        data,
      })
    })
    .catch(err => {
      console.error(`Error getting emotions: ${err.message}`)
      res.json({
        status: 'ERROR',
        message: err.message,
      })
    })
}
