const mongoose = require('mongoose');

// Define the Mongoose schema for a user/volunteer
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  applicationDate: { type: Date, required: true },
  specialities: [{ type: String }], // Array of strings for specialities
  contact: { type: String, required: true },
  phone: { type: String, required: true },
  dayAvailability: { type: String, required: true },
  timeAvailability: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] // Array to reference task IDs if needed
});

module.exports = mongoose.model('User', UserSchema);
