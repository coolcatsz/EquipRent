const { Router } = require('express');
const itemRoute = Router();
const { findAllItem } = require('../helpers/itemHelper');

itemRoute.get('/allItem', (req, res) => {
  findAllItem()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      console.log('Item-router Err');
      res.sendStatus(500);
    });
});

module.exports = itemRoute;