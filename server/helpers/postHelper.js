/* eslint-disable camelcase */
const { Post } = require('/home/user/EquipRent/db/index.js');

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

const findAllPost = () => Post.findAll();

const findItemPost = (itemId) => Post.findAll({
  where: {
    itemId
  }
});

const findUserPost = (userId) => Post.findAll({
  where: {
    userId
  }
});

module.exports.newPost = newPost;
module.exports.findItemPost = findItemPost;
module.exports.findAllPost = findAllPost;
module.exports.findUserPost = findUserPost;