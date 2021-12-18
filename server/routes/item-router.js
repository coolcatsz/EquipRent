const { Router } = require('express');
const itemRoute = Router();
const { findAllItem, findUserItem, itemImgId } = require('../helpers/itemHelper');

itemRoute.get('/allItem', (req, res) => {
  findAllItem()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      console.log('Item-router Err');
      res.sendStatus(500);
    });
});

itemRoute.get('/userItem/:userId', (req, res) => {
  // console.log(req);
  findUserItem(req.params.userId)
    .then((data) => {
      // console.log(data, 'data');
      res.status(200).send(data);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

itemRoute.get('/itemImg/:itemId', (req, res) => {
  // console.log(req.params);
  itemImgId(req.params.itemId)
    .then((data) => {
      // console.log(data, 'data');
      res.status(200).send(data);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = itemRoute;