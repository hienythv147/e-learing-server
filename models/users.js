const database = require('../dbConnect');

const User = function(user) {
    this.id = user.id,
    this.user_name = user.user_name,
    this.address = user.address,
    this.roles = user.roles
}

User.getUsers = function(result) {
    database.query("SELECT * FROM tbl_sinhvien", function (err, users) {
        if (err) {
            result(null);
        } else result(users);
    });
};

User.getUserById = function(id, result) {
    database.query("SELECT * FROM tbl_sinhvien WHERE MaSV = ?", id, function(err, user) {
        if (err || user.length == 0) {
            result(null);
        } else result(user[0]);
    });
}

module.exports = User;