<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-links">
        <button @click="currentView = 'accept'" :class="{ active: currentView === 'accept' }">Accept Task</button>
        <button @click="currentView = 'current'" :class="{ active: currentView === 'current' }">Accepted Tasks</button>
      </div>
    </nav>
    <br>
    <!-- Content Based on Selected View -->
    <div v-if="currentView === 'accept'">
      <h2>Accept Task</h2>
      <p>Here you can accept tasks. A list of available tasks will be shown here.</p>
      <div class="card-container">
        <div class="card" v-for="task in availableTasks" :key="task.id">
          <img :src="task.image" alt="Task Image" class="card-image"/>
          <div class="card-content">
            <h3>{{ task.title }}</h3>
            <p><strong>Type:</strong> {{ task.type }}</p>
            <p><strong>Location:</strong> {{ task.location }}</p>
            <button class="button-green" @click="acceptTask(task.id)">Accept</button>
            <button class="button-blue" @click="openModal(task)">Read More</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentView === 'current'">
      <h2>Accepted Tasks</h2>
      <p>Here are the current tasks you have accepted. Details of tasks and status will be shown here.</p>
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

    <!-- Modal for Task Details -->
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
import TaskCreationPage from './createtasks.vue'; // Import the Task Creation Page component

export default {
  components: {
    TaskCreationPage, // Register the component
  },
  data() {
    return {
      currentView: 'accept', 
      availableTasks: [
        {
          id: 1, 
          title: 'Kill a Lizard',
          description: 'Kill a lizard in the backyard.',
          location: 'abc street',
          type: 'Cleanup',
          timing: '2 hours',
          isOrganization: false,
          image: 'https://via.placeholder.com/300x200?text=Clean+the+Park'
        },
        {
          id: 2,
          title: 'Organize community event',
          description: 'Organize the annual community charity event.',
          location: 'Community Hall',
          type: 'Event',
          timing: '4 hours',
          isOrganization: true,
          image: 'https://via.placeholder.com/300x200?text=Community+Event'
        }
      ],
      currentTasks: [],
      showModal: false,
      selectedTask: {},
    };
  },
  methods: {
    acceptTask(taskId) {
      const task = this.availableTasks.find(t => t.id === taskId);
      if (task) {
        this.currentTasks.push({ ...task, status: 'Accepted' });
        this.availableTasks = this.availableTasks.filter(t => t.id !== taskId);
      }
    },
    openModal(task) {
      this.selectedTask = task;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedTask = {};
    },
    addTaskToCurrent(task) {
      this.currentTasks.push({ ...task, status: 'Accepted' });
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}


html, body {
  width: 100%;
  height: 100%;
}

/* Navigation Bar */
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.navbar .navbar-links {
  display: flex;
  justify-content: center;
}

.navbar button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: transparent;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar button.active {
  background-color: #e9ecef;
  color: #333;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Card Container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
}

/* Card */
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  background-color: #f9f9f9;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card-content h3 {
  margin-top: 0;
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
