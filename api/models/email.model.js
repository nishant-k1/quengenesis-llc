const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema
const emailSchema = new Schema({
    fName: {type: String, required:true},
    lName: {type: String, required:true},
    email: {type: String, required:true}, 
    phone: {type: Number, required:true},
    message: {type: String, required:true}
});

// Item Model
const Email = mongoose.model("Email", emailSchema);

module.exports = Email;