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
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.String,
  googleId: DataTypes.String,
  thumbnail: DataTypes.String,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.INTEGER,
  description: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  type: DataTypes.STRING
});

const ItemImg = sequelize.define('ItemImg', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  itemId: DataTypes.INTEGER,
  smImg: DataTypes.STRING,
  mdImg: DataTypes.STRING,
  lgImg: DataTypes.STRING,
});


const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  itemId: DataTypes.INTEGER,
  startDate: DataTypes.INTEGER,
  endDate: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  total: DataTypes.INTEGER
});

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  reservationId: {
    type: DataTypes.INTEGER,
    references: {
      model: Reservation,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  leaserId: DataTypes.INTEGER,
  renterId: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
  description: DataTypes.STRING,
  type: DataTypes.STRING
});

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  brandName: DataTypes.STRING,
  itemType: DataTypes.STRING,
  price: DataTypes.INTEGER,
  condition: DataTypes.STRING,
  value: DataTypes.INTEGER,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  availability: DataTypes.BOOLEAN,
  description: DataTypes.STRING,
  postId: {
    type: DataTypes.INTEGER,
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