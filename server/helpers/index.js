/* eslint-disable camelcase */
const { db, User, ItemImg, Reservation, Post, Item } = require('/Users/chhotisherpa/EquipRent/db/index.js');

const newPost = (post) => Post.create({
  rating: post.rating,
  description: post.description
}).then((data) => {
  console.log('success', data.toJSON());
}).catch((err) => {
  console.log(err);
});

const findPost = (item_id) => Post.findAll({
  where: {
    item_id: item_id
  }
});

module.exports.newPost = newPost;
module.exports.findPost = findPost;