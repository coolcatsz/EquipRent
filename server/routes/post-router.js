/* eslint-disable camelcase */
const { Router } = require('express');
const postRoute = Router();
const { newPost, findPost } = require('/Users/chhotisherpa/EquipRent/server/helpers/index.js');

// postRoute.get('/allPost', (req, res) => {
//   console.log(req);
//   // findPost()
//   //   .then((data) => {
//   //     console.log(data, 'Data');
//   //   }).catch((err) => {
//   //     console.log('Get Post Fail');
//   //     res.status(500).end();
//   //   });
// });

postRoute.post('/insertPost', (req, res) => {
  // console.log(req);
  const post = {
    user_id: req.body.user_id,
    item_id: req.body.item_id,
    rating: req.body.rating,
    description: req.body.description
  };
  console.log(post);
  // return newPost(post);
});

module.exports = postRoute;