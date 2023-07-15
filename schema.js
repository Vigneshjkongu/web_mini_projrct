const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    email: String,
    password: String,
    cpassword: String,
});
module.exports.Books = mongoose.model("Books",bookSchema);
