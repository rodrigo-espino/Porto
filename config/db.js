const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "ABRAom37",
    database: "porto"
});

db.getConnection(() => {
    console.log("Connection to the database server succesful")
});

module.exports = db;
