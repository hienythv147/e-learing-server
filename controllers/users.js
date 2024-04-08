var User = require('../models/users');

exports.getUsers = function(req, res) {
    User.getUsers(function(data) {
        res.send({result: data});
    });
}

exports.getUserById = function(req, res) {
    const userId = req.params.userId;
    User.getUserById(userId, function(data) {
        res.send({result: data});
    });
}

exports.createUser = function(req, res) {
    User.getUserById(userId, function(data) {
        res.send({result: data});
    });
}

