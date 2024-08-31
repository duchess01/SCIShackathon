// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //for connecting front to backend
const bodyParser = require('body-parser')
require('dotenv').config();

// Import Mongoose models
const User = require('./models/User');
const Task = require('./models/Task');



const app = express();
app.use(bodyParser.json());


// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust if the frontend runs on a different port
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();

// Example routes, USE POSTMAN TO TEST
// Get all users
app.get('/api/users', async (req, res) => {
    console.log("GET REQUEST RECEIVED")
    try {
      const users = await User.find(); // Fetch all users from the database
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Add a new user
  app.post('/api/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Add a new task
  app.post('/api/tasks', async (req, res) => {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

   // Define the webhook route
   app.post('/webhook', async (req, res) => {
    try {
      const data = req.body;

      if (data && data.queryResult) {
        // Extract parameters
        const parameters = data.queryResult.parameters || {};
        const time = parameters.time;
        const date = parameters.date;
        const task = parameters.task;

        // Prepare data to be inserted
        const entry = {
          time: time,
          date: date,
          task: task,
        };

        // Save to MongoDB
        await db.collection('webhook_data').insertOne(entry);

        return res.json({
          fulfillmentText: 'Your time, date, and task have been saved.',
        });
      } else {
        return res.status(400).json({
          fulfillmentText: 'Invalid data received.',
        });
      }
    } catch (e) {
      return res.status(500).json({
        fulfillmentText: `An error occurred: ${e.message}`,
      });
    }
  });


// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
