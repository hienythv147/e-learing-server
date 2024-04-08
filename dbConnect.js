var mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect(process.env.URI_DB)
.then(() => console.log('Connected!'));

exports.modules = connection;

