const { Router } = require('express');
const itemRoute = Router();
const { findAllItem, findUserItem, itemImgId, newItem, itemAvailability, itemBookmark, newItemImg, findItemById} = require('../helpers/itemHelper');
// const { findAllItem, findUserItem, itemImgId, newItem, newItemImg } = require('../helpers/itemHelper');

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

itemRoute.get('/itemById/:id', (req, res) => {
  findItemById(req.params.id)
    .then((data) => {
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

itemRoute.post('/newItems', (req, res) => {
  const { brand, type, price, condition, value, availability, description, itemId, userId } = req.body;
  const item = {
    brand: brand,
    type: type,
    price: price,
    condition: condition,
    value: value,
    availability: availability,
    description: description,
    itemId: itemId,
    userId: userId,
  };
  return newItem(item)
    .then((data) => {
      res.status(201).send(data);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

itemRoute.post('/newItemImg', (req, res) => {
  const { imgUrl, itemId } = req.body;
  return newItemImg(imgUrl, itemId)
    .then(() => {
      res.sendStatus(201);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

itemRoute.put('/available/:id', (req, res) => {
  // console.log(req);
  itemAvailability(req.params.id)
    .then(([data]) => {
      console.log(data);
      if (data === 0) {
        res.sendStatus(404);
      }
      res.sendStatus(200);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

// item bookmarked
itemRoute.post('/bookmark', (req, res) => {
  const {userId, itemId} = req.body;
  const newBookmark = {
    userId: userId,
    itemId: itemId
  };
  return itemBookmark(newBookmark)
    .then(() => {
      res.status(201);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = itemRoute;