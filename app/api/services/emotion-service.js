'use strict'

const _ = require('lodash')
const rp = require('request-promise')
const FACE_API_URL =
  'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect'

/**
 * getFaceEmotion
 * @param {*} body
 * @return {*}
 */
exports.getFaceEmotion = body => {
  console.log('getFaceEmotion')

  const options = {
    url: `${FACE_API_URL}?returnFaceAttributes=emotion`,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': process.env.EMOTION_API_KEY,
    },
    method: 'POST',
    body: body,
  }

  return rp(options).then(data => {
    const info = JSON.parse(data)
    return {
      faceRectangle: info[0].faceRectangle,
      scores: [
        _.map(_.keys(info[0].faceAttributes.emotion), key => {
          return {
            axis: key,
            value: info[0].faceAttributes.emotion[key],
          }
        }),
      ],
      rawScores: info[0].faceAttributes.emotion,
    }
  })
}
