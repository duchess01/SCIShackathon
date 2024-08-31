const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    priority: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
    status: { type: String, enum: ['In Progress', 'Completed', 'Pending'], required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: [{ type: String }], // Array of strings for assigned users
    category: { type: String, required: true },
    karmaPoints: { type: Number, required: true }
  });

module.exports = mongoose.model('Task', TaskSchema);
