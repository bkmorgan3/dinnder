const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// const mongoose = require('mongoose');
// const config = require("../config/keys");
// mongoose.connect(config.MONGO_DB)
//  .then(() => {
//      console.log("connected to MongoDB")
//  }, (err) => {
//      console.log("Err", err)
//  });

const userSchema = new Schema({
    username: {type: String, required: true, unique:true},
    password: {type: String, required:true}
});

 module.exports = User = mongoose.model('User', userSchema);
