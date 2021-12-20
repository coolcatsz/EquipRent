/* eslint-disable camelcase */
const { Router } = require('express');
const searchRoute = Router();
const { itemSearch } = require('../helpers/searchHelper.js');

searchRoute.get('/:searchTerm', (req, res) => {
  console.log('req.params: ', req.params);
  itemSearch(req.params.searchTerm)
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      console.log('search-router Err');
      res.sendStatus(500);
    });
});

module.exports = searchRoute;