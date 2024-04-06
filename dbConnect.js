const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
connection.query("SELECT * FROM tbl_sinhvien", function (err, row) {
    if (err) { throw err };
    console.log("connected to db");
});

module.exports = connection;