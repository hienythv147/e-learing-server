var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getUsers);

// GET user by id
router.get("/:userId", userController.getUserById);

module.exports = router;