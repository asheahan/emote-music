"use strict";

const rp = require("request-promise");

/**
 * getFaceEmotion
 * @param {*} body
 * @return {*}
 */
exports.getFaceEmotion = body => {
  console.log("getFaceEmotion");

  let options = {
    url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
    headers: {
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": process.env.EMOTION_API_KEY
    },
    method: "POST",
    body: body
  };

  return rp(options);
};
