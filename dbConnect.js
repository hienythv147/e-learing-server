const mysql = require("mysql");

var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "testdb"
});
connection.query("SELECT * FROM tbl_sinhvien", function (err, row) {
    if (err) { throw err };
    console.log("connected to db");
});

module.exports = connection;




// class Database {
//   constructor() {
//     this._connect()
//   }

//   _connect() {
//     var connection = mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "123456",
//       database: "testdb"
//     });
//     connection.connect();
//     connection.query("SELECT * FROM tbl_sinhvien", function (err, row) {
//       if (err) { throw err };
//       console.log("connected to db");
//     });
//     connection.end();
//   }
// }

// module.exports = new Database();
