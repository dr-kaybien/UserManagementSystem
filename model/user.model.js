const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   firstName: {
    type: String,
    required: true,
   } ,
   lastName: {
    type: String,
   } ,
   email: {
    type: String,
    required: true,
    unique: true
   } ,
   password: {
    type: String,
    required: true,
    unique: true
   } ,
},
    {
        timestamps: true
    }
);

const User = mongoose.model('user', UserSchema);

module.exports = User;