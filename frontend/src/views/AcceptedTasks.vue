<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="navbar">
        <div class="navbar-links">
          <button @click="currentView = 'current'" :class="{ active: currentView === 'current' }">Accepted Tasks</button>
        </div>
      </nav>
      <br>
      <!-- Displaying Accepted Tasks -->
      <div v-if="currentView === 'current'">
        <h2>Accepted Tasks</h2>
        <p>Here are the tasks you have currently accepted. You can view their details and status below.</p>
        <div class="card-container">
          <div class="card" v-for="task in currentTasks" :key="task.id">
            <img :src="task.image" alt="Task Image" class="card-image"/>
            <div class="card-content">
              <h3>{{ task.title }}</h3>
              <p><strong>Description:</strong> {{ task.description }}</p>
              <p><strong>Location:</strong> {{ task.location }}</p>
              <p><strong>Type:</strong> {{ task.type }}</p>
              <p><strong>Timing:</strong> {{ task.timing }}</p>
              <p><strong>Task Type:</strong> {{ task.isOrganization ? 'Organization' : 'Individual' }}</p>
              <p><strong>Status:</strong> {{ task.status }}</p>
              <button @click="openModal(task)">Read More</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Dialogflow Messenger -->
      <df-messenger
        intent="WELCOME"
        chat-title="Taskbot"
        agent-id="f93b7b22-a24a-41bf-b2a3-d5b84f208202"
        language-code="en">
      </df-messenger>
  
      <!-- Task Details Modal -->
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h3>{{ selectedTask.title }}</h3>
          <p><strong>Description:</strong> {{ selectedTask.description }}</p>
          <p><strong>Location:</strong> {{ selectedTask.location }}</p>
          <p><strong>Type:</strong> {{ selectedTask.type }}</p>
          <p><strong>Timing:</strong> {{ selectedTask.timing }}</p>
          <p><strong>Task Type:</strong> {{ selectedTask.isOrganization ? 'Organization' : 'Individual' }}</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentView: 'current', // Default view set to 'current'
        currentTasks: [
          {
            id: 1, 
            title: 'Water Plants',
            description: 'Water the plants in the garden.',
            location: 'Backyard',
            type: 'Maintenance',
            timing: '1 hour',
            isOrganization: false,
            image: 'https://gardeningsg.nparks.gov.sg/images/Gardeners/Kampung%20Admiralty%20(4).jpg' // Updated image URL
          }
        ],
        showModal: false,
        selectedTask: {},
      };
    },
    methods: {
      openModal(task) {
        this.selectedTask = task;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedTask = {};
      }
    },
    mounted() {
      // Load the df-messenger script dynamically
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  };
  </script>
  
  <style scoped>
  /* Card Container */
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* Ensure cards align to the left */
    justify-content: flex-start;
    width: 100%;
  }
  
  /* Card */
  .card {
    display: flex;
    align-items: flex-start; /* Align items to the start of the flex container */
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    width: 300px;
    background-color: white; /* Set card background color to white */
  }
  
  /* Card Image */
  .card-image {
    width: 150px; /* Adjust width for smaller image */
    height: 100px; /* Adjust height for smaller image */
    object-fit: cover;
  }
  
  /* Card Content */
  .card-content {
    padding: 10px;
    margin-top: 10px; /* Increase top margin */
    flex: 1; /* Take up remaining space */
  }
  
  /* Button Styles */
  .button-green, .button-blue {
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  /* Green button */
  .button-green {
    background-color: green;
  }
  
  /* Blue button */
  .button-blue {
    background-color: blue;
  }
  
  /* Adjust button hover state */
  .card-content button:hover {
    background-color: #e9ecef;
    color: #333;
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    max-width: 500px;
  }
  
  .modal-content button {
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
  }
  </style>
  