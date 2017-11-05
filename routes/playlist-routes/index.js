/**
 * Module to define routes for playlists
 * @requires lodash
 * @requires express
 * @requires routes/playlist-routes/playlist-routes
 */

// Dependencies
const _ = require('lodash');
const express = require('express');
const playlistRoutes = require('./playlist-routes');

const playlistRouter = express.Router();

module.exports = router => {
  playlistRouter.get('/recommend', playlistRoutes.getRecommendations);

  router.use('/playlist', playlistRouter);
};
