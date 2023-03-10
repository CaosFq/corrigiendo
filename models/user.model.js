const { DataTypes } = require("sequelize");
const { db } = require("../database/db");

const User = db.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwordChangeAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('client', 'admin'),
        allowNull: false,
        defaultValue: 'client'
    },
    
    
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = User;