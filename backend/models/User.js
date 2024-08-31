const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
//   email: { type: String, required: true, unique: true }, need email and pass??
//   password: { type: String, required: true },  
  karmaPoints: { type: Number, default: 0 },
  age: { type: Number, required: true },
  location: {type: String, required: true },
  description:{type: String, default: ""}
});

module.exports = mongoose.model('User', UserSchema);
