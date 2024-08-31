const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the task
    description: { type: String, required: true }, // Description of the task
    location: { type: String, required: true }, // Location of the task
    type: { type: String, enum: ['Engagement', 'Event'], required: true }, // Type of task (Engagement, Event)
    timing: { type: String, required: true }, // Timing details of the task
    isOrganization: { type: Boolean, required: true }, // Boolean to indicate if it's an organization-led task
    image: { type: String }, // URL or path to the task image
    karmaPoints: {type: Number, default: 100} // set to 100 karma points for now
  });

module.exports = mongoose.model('Task', TaskSchema);
