const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

consign()
    .include('app/models/index.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;