const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '',
  dbName: 'equipRent',
  dbPort: 5432,
  dialect: 'postgres',
  logging: false
});

//checks for database connection
async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
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
      key: id,
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
      key: id,
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
      key: id,
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  availability: DataTypes.BOOLEAN,
  description: DataTypes.STRING,
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: id,
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
});

async() => {
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
};

module.exports = {
  db: sequelize,
  User,
  ItemImg,
  Reservation,
  Post,
  Item
};