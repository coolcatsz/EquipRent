require('dotenv').config();
const { Sequelize, DataTypes, DECIMAL, Deferrable } = require('sequelize');

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT,
} = process.env;

const sequelize = new Sequelize( DATABASE, USER_NAME, USER_PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false
});

//checks for database credentials
sequelize.authenticate()
  .then(() => console.log('connection established'))
  .catch(err => console.error('error', err));

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  googleId: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
  description: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  type: Sequelize.STRING
});

const ItemImg = sequelize.define('ItemImg', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  itemId: Sequelize.INTEGER,
  smImg: Sequelize.STRING,
  mdImg: Sequelize.STRING,
  lgImg: Sequelize.STRING,
});


const Reservation = sequelize.define('Reservation', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  itemId: Sequelize.INTEGER,
  startDate: Sequelize.INTEGER,
  endDate: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  total: Sequelize.INTEGER
});

const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  reservationId: {
    type: Sequelize.INTEGER,
    references: {
      model: Reservation,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  leaserId: Sequelize.INTEGER,
  renterId: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  description: Sequelize.STRING,
  type: Sequelize.STRING
});

const Item = sequelize.define('Item', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  brandName: Sequelize.STRING,
  itemType: Sequelize.STRING,
  price: Sequelize.INTEGER,
  condition: Sequelize.STRING,
  value: Sequelize.INTEGER,
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  availability: Sequelize.BOOLEAN,
  description: Sequelize.STRING,
  postId: {
    type: Sequelize.INTEGER,
    references: {
      model: Post,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
});

sequelize.sync({force: true});

module.exports = {
  db: sequelize,
  User,
  ItemImg,
  Reservation,
  Post,
  Item
};