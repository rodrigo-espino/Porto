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

const ProductsORM = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    }

   
})

module.exports = ProductsORM;