/* eslint-disable camelcase */
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

// one to many with posts
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  contact: DataTypes.STRING,
  description: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  type: DataTypes.STRING
},
{
  timestamps: true
});


// one to many with posts
const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  brand: DataTypes.STRING,
  type: DataTypes.STRING,
  price: DataTypes.INTEGER,
  condition: DataTypes.STRING,
  value: DataTypes.INTEGER,
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  availability: DataTypes.BOOLEAN,
  description: DataTypes.STRING,
}, {
  timestamps: true
});

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  renter_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  lender_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  rating: DataTypes.INTEGER,
  description: DataTypes.STRING,
}, {
  timestamps: true
});


const ItemImg = sequelize.define('ItemImg', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  imgUrl: DataTypes.STRING
}, {
  timestamps: true
});


const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  startDate: DataTypes.INTEGER,
  endDate: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  total: DataTypes.INTEGER
});

sequelize.sync({force: false})
  .then(() => User.sync())
  .then(() => Item.sync())
  .then(() => Post.sync())
  .then(() => ItemImg.sync())
  .then(() => Reservation.sync())
  .then(() => console.log('table synced'))
  .catch((err) => console.error('Sync Error'));

module.exports = {
  db: sequelize,
  User,
  ItemImg,
  Reservation,
  Post,
  Item
};