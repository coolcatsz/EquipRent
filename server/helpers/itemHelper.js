const { ItemImg, Item } = require('/home/user/EquipRent/db/index.js');

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

const newItem = (item) => Item.create({
  brand: item.brand,
  type: item.type,
  price: item.price,
  condition: item.condition,
  value: item.value,
  availability: true,
  description: item.description,
  itemId: item.itemId,
  userId: item.userId,
}).then((data) => {
  console.log('success', data.toJSON());
}).catch((err) => {
  console.log(err);
});

module.exports.newItem = newItem;
module.exports.findAllItem = findAllItem;
module.exports.findUserItem = findUserItem;
module.exports.itemImgId = itemImgId;