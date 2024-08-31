<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-links">
        <!-- PrimeVue Button for 'Accept Task' -->
          <Button

            label="Accept Task"
            class="p-button p-component"
            @click="currentView = 'accept'"
            severity="success"  
            :class="{ 'p-button-active': currentView === 'accept' }"
          />
          <!-- PrimeVue Button for 'Accepted Tasks' -->
          <Button

            label="Accepted Tasks"
            class="p-button p-component"
            @click="currentView = 'current'"
            severity="secondary"  
            :class="{ 'p-button-active': currentView === 'current' }"
          />
      </div>
    </nav>
    <br>
    <!-- Content Based on Selected View -->
    <div v-if="currentView === 'accept'">
      <h1>Accept Task</h1>
      <p>Accept tasks and earn 100 Karma per successfully completed task!</p>
      <div class="card-container">
        <div class="card" v-for="task in availableTasks" :key="task.id">
          <img :src="task.image" alt="Task Image" class="card-image"/>
          <div class="card-content">
            <h3>{{ task.title }}</h3>
            <p><strong>Type:</strong> {{ task.type }}</p>
            <p><strong>Location:</strong> {{ task.location }}</p>
            <Button @click="acceptTask(task.id)" style="margin-right: 5%; padding-left: 10%; padding-right: 10%;">Accept</Button>
            <Button
            label="Read More"
            severity="secondary"
            outlined
            style="padding-left: 10%; padding-right: 10%;"
            @click="openModal(task)">
          </Button>


          </div>
        </div>
      </div>
    </div>

    <div v-if="currentView === 'current'">
      <h1>Accepted Tasks</h1>
      <p>Here are your accepted Tasks</p>
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
        <Button @click="closeModal"> Close </Button>
      </div>
    </div>
  </div>

  <df-messenger
    intent="WELCOME"
    chat-title="Taskbot"
    agent-id="f93b7b22-a24a-41bf-b2a3-d5b84f208202"
    language-code="en">
</df-messenger>
  
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
          title: 'Elderly Volunteer companion',
          description: 'Join and guide the elderly on their day to day activities in the community such as Medical appointments.',
          location: 'Hougang',
          type: 'Engagement',
          timing: '19/13/2015 for 2 hours',
          isOrganization: false,
          image: '../../public/demo/images/park.jpg'
        },
        {
          id: 2,
          title: 'Organize Senior Activity Events',
          description: 'Assist with Organizing the annual community charity event by planning the necessary logistics and activities involved.',
          location: 'Yishun',
          type: 'Event',
          timing: '02/09/2019 4 hours',
          isOrganization: true,
          image: '../../public/demo/images/char.png'
        },
        {
          id: 3,
          title: 'Senior Care Assistance Program',
          description: 'Be involved in the educational efforts related to caregiving of the senior members in the community.',
          location: 'Fengshan',
          type: 'Event',
          timing: '05/13/2017 2 hours',
          isOrganization: true,
          image: '../../public/demo/images/senior.jpg'
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
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js';
    script.defer = true;
    document.head.appendChild(script);

    // Optionally, add an onload event listener to confirm the script has been loaded
    script.onload = () => {
      console.log('Dialogflow Messenger script loaded successfully.');
    };
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
