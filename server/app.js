const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(bodyParser.json());
app.use(express.static(CLIENT_PATH));


module.exports = {
  app,
};