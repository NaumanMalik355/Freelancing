const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const MyData = new Schema({
  name: {
    type: String
  },
  regno: {
    type: String
  },
  status: {
      type: String
  },
  
  dataId: {type: Schema.Types.ObjectId, ref:'LoginAccount'}

});

module.exports = mongoose.model("MyData", MyData);
