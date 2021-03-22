const { DataTypes } = require('sequelize');
const db = require('./index')

const Users = db.define('users',
    [
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    ]
    
);

const init = async () => {
    await Users.sync();
  };
  init();
  
  module.exports = Users;