const { Bookmark } = require('#db/index.js');
// const { Bookmark } = require('home/user/EquipRent/db/index.js');

const allBookMarks = () => Bookmark.findAll();

const findUserBookmark = (userId) => Bookmark.findAll({
  where: {
    userId
  }
});

const itemBookmark = (bookmark) => Bookmark.create({
  userId: bookmark.userId,
  itemId: bookmark.itemId
}).then(() => console.log('Bookmark Created'))
  .catch((err) => console.error('Bookmark create err'));

module.exports.allBookMarks = allBookMarks;
module.exports.findUserBookmark = findUserBookmark;
module.exports.itemBookmark = itemBookmark;
