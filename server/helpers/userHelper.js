const { User } = require('../../db');

const getAllUsers = () => User.findAll();

const getUserById = (id) => User.findOne({
  where: {
    id
  }
});

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;