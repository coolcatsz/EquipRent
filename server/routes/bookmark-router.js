const { Router } = require('express');
const bookmarkRoute = Router();
const { itemBookmark, findUserBookmark, allBookMarks } = require('../helpers/bookmarkHelper');

bookmarkRoute.get('/allBookMark', (req, res) => {
  allBookMarks()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      console.log('Bookmark-router Err');
      res.sendStatus(500);
    });
});

bookmarkRoute.post('/bookmark', (req, res) => {
  const {userId, itemId} = req.body;
  const newBookmark = {
    userId: userId,
    itemId: itemId
  };
  return itemBookmark(newBookmark)
    .then(() => {
      res.sendStatus(201);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

bookmarkRoute.get('/userBookmark/:userId', (req, res) => {
  findUserBookmark(req.params.userId)
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = bookmarkRoute;