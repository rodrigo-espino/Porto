const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "toor",
    database: "porto",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

const UserORM = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    }
})

module.exports = UserORM;