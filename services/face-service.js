'use strict';

const rp = require('request-promise');
let config = require('../config/api-keys.json');

/**
 * getFaceAttributes
 * @param {*} body
 * @return {*}
 */
exports.getFaceAttributes = (body) => {
  console.log('getFaceAttributes');

  let options = {
    url: 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': config.face
    },
    method: 'POST',
    body: body
  };

  return rp(options);
};