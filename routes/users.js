var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(userController.users());
});

// GET user by id
router.get("/:userId", function(req, res) {
  res.json(userController.getUserById(req.params.userId));
});

module.exports = router;