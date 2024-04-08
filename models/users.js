var database = require('../dbConnect');
var mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: String,
    pass_word: String,
    email: String,
    roles: Boolean
}, {
    collection: "users"
});

exports.modules = UserSchema;