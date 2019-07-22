const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const PersonData = new Schema({
  email: {
    type: String
  },
  contact: {
    type: Number
  },
  homeadress: {
      type: String
  },
  loginId: {type: Schema.Types.ObjectId, ref:'LoginAccount'}



});

module.exports = mongoose.model("PersonData", PersonData);
