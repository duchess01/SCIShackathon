const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
  status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
  karmaPoints: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);
