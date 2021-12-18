const { ItemImg, Item } = require('#db/index.js');

const findAllItem = () => Item.findAll();

const findUserItem = (userId) => Item.findAll({
  where: {
    userId
  }
});

module.exports.findAllItem = findAllItem;
module.exports.findUserItem = findUserItem;