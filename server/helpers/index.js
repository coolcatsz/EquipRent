/* eslint-disable camelcase */
const { db, User, ItemImg, Reservation, Post, Item } = require('/Users/chhotisherpa/EquipRent/db/index.js');

const newPost = (post) => Post.create({
  rating: post.rating,
  description: post.description,
  userId: post.userId,
  itemId: post.itemId
}).then((data) => {
  console.log('success', data.toJSON());
}).catch((err) => {
  console.log(err);
});

const findPost = (itemId) => Post.findAll({
  where: {
    itemId: itemId
  }
});

module.exports.newPost = newPost;
module.exports.findPost = findPost;