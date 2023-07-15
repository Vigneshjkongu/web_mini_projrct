const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    email: String,
    password: String,
});
module.exports.Books = mongoose.model("Books",bookSchema);
