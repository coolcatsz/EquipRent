const { ItemImg, Item } = require('#db/index.js');

const findAllItem = () => Item.findAll();

const findUserItem = (userId) => Item.findAll({
  where: {
    userId
  }
});

const itemImgId = (itemId) => ItemImg.findAll({
  where: {
    itemId
  }
});

module.exports.findAllItem = findAllItem;
module.exports.findUserItem = findUserItem;
module.exports.itemImgId = itemImgId;