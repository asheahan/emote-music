'use strict'

const rp = require('request-promise')

/**
 * authenticate
 * @return {*} token
 */
exports.authenticate = () => {
  console.log('authenticate')

  let options = {
    uri: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        new Buffer(
          `${process.env.SPOTIFY_CLIENT_ID}:${
            process.env.SPOTIFY_CLIENT_SECRET
          }`,
        ).toString('base64'),
      Accept: 'application/json',
    },
    method: 'POST',
    body: 'grant_type=client_credentials',
  }

  return rp(options)
}

/**
 * getRecommendations
 * @param {*} credentials
 * @param {*} queryParams
 * @return {*}
 */
exports.getRecommendations = (credentials, queryParams) => {
  console.log('getRecommendations')

  let options = {
    uri: 'https://api.spotify.com/v1/recommendations',
    qs: calculateParameters(queryParams),
    headers: {
      Authorization: 'Bearer ' + JSON.parse(credentials).access_token,
    },
  }

  return rp(options)
}

function calculateParameters(params) {
  let targets = {}

  if (params.happiness > 0.5) {
    targets.seed_genres = 'happy,summer'
    targets.seed_tracks = '6aU6a9tdn2vHhnPGlboFZX'
  }

  if (params.sadness > 0.5) {
    targets.target_valence = 1 - params.sadness
    targets.target_danceability = 1 - params.sadness
    targets.seed_genres = 'rainy-day,sad'
  }

  if (params.anger > 0.5) {
    targets.target_valence = 1 - params.anger
    targets.target_energy = params.anger
    targets.target_loudness = params.anger
    targets.seed_genres = 'hard-rock,metal'
  }

  if (params.surprise > 0.5) {
    targets.seed_genres = 'funk,party,show-tunes'
  }

  return targets
}
