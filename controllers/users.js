var Users = require('../models/users');

function users() {
    var data = Users.getUsers();
    return data;
}

function getUserById(userId) {
    return {"user": userId};
}

module.exports = {users, getUserById};