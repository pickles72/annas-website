const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

// Pug Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/masonry-layout/dist/'));

app.use('/', routes);

module.exports = app;