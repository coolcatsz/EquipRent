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
  name: {
    type: DataTypes.STRING,

  }
});

