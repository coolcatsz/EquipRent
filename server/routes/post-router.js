/* eslint-disable camelcase */
const { Router } = require('express');
const postRoute = Router();
const { newPost, findPost } = require('/Users/chhotisherpa/EquipRent/server/helpers/index.js');

postRoute.get('/allPost', (req, res) => {
  console.log(req);
});

postRoute.post('/insertPost', (req, res) => {
  console.log(req.body);
  const { rating, description, itemId, userId } = req.body;
  const post = {
    rating: rating,
    description: description,
    itemId: itemId,
    userId: userId
  };
  // console.log(post);
  return newPost(post);
});

module.exports = postRoute;