require('dotenv').config();

const allowCORS = require('./app/api/config/allow-cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const fs = require('fs');
const logger = require('morgan');
const path = require('path');

let app = express();
let router = express.Router();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app', 'public')));

// allow CORS for dev
if (process.env.ALLOW_CORS === 'true') {
  allowCORS(app);
}

// Loop through routes directory and add routes to router
fs.readdir(path.join(__dirname, 'app', 'api', 'routes'), (err, contents) => {
  if (err) {
    console.error('Error reading routes directory');
    return process.exit(1);
  }

  contents
    .filter(content =>
      fs
        .lstatSync(path.join(__dirname, 'app', 'api', 'routes', content))
        .isDirectory()
    )
    .forEach(folder => {
      try {
        require(path.join(__dirname, 'app', 'api', 'routes', folder))(router);
      } catch (e) {
        console.error(`Error adding routes for ${folder}`);
      }
    });
});

app.use('/api', router);

module.exports = app;
