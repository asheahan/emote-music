'use strict';

const rp = require('request-promise');
let config = require('../config/api-keys.json');

/**
 * getFaceEmotion
 * @param {*} body
 * @return {*}
 */
exports.getFaceEmotion = (body) => {
  console.log('getFaceEmotion');

  let options = {
    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': config.emotion
    },
    method: 'POST',
    body: body
  };

  return rp(options);
};