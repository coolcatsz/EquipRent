/* eslint-disable camelcase */
const { db } = require('../../db');
// const { db } = require('/home/user/EquipRent/db/index.js');

const itemSearch = (text) => {
  return db.query(`
  SELECT * FROM "Items"
  WHERE "Items_search" @@ plainto_tsquery('english', '${text}');
  `, { raw: true, type: db.QueryTypes.SELECT })
    .then(result => {
      console.log('in item search');
      console.log('result: ', result);
      return result;
    })
    .catch(err => console.log('error in itemSearch: ', err));
};

module.exports = {
  itemSearch
};