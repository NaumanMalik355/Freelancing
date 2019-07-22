const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const books = new Schema({
  departname: {
    type: String
  },
  semester : {
    type: Number
  },
  bookURL:{
    type:String
  }
});
module.exports = mongoose.model("Book", books);