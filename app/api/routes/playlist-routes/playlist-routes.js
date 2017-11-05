/**
 * Module for playlist route handlers
 * @requires lodash
 * @requires services/spotify-service
 */

// Dependencies
const _ = require('lodash');
const spotifyService = require('../../services/spotify-service');

/**
 * Get recommendations from Spotify
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
exports.getRecommendations = (req, res, next) => {
  spotifyService
    .authenticate()
    .then(credentials => {
      return spotifyService.getRecommendations(credentials, req.query);
    })
    .then(data => {
      data = JSON.parse(data);

      let tracks = _.uniq(
        _.map(data.tracks, track => {
          return {
            uri: 'https://open.spotify.com/embed?uri=' + encodeURI(track.uri),
            id: track.id
          };
        })
      );
      res.json({
        status: 'SUCCESS',
        message: 'Retrieved recommendations',
        data: tracks
      });
    })
    .catch(err => {
      console.error(`Error getting recommendations: ${err.message}`);
      res.json({
        status: 'ERROR',
        message: err.message
      });
    });
};
