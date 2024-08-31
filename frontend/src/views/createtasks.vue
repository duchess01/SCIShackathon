<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-links">
        <button @click="currentView = 'current'" :class="{ active: currentView === 'current' }">Created Tasks</button>
      </div>
    </nav>
    <br>
    <!-- Content Based on Selected View -->
    <div class="card flex flex-col gap-4">
                    <div class="font-semibold text-xl">Enter Task details</div>
                    <div class="flex flex-col gap-2">
                        <label for="name1">Title</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="Description">Description</label>
                        <InputText id="text" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="location">Location</label>
                        <InputText id="location" type="text" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="time">Time</label>
                        <InputText id="time" type="datetime-local" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="type">Task type</label>
                        <select name="type" id="type">
                        <option value="volvo">Individual</option>
                        <option value="saab">Organization</option>
                      </select>
                    </div>
                    <button>Create Task</button>
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
export default {
  data() {
    return {
      title: "",
      taskType: "",
      location: "",
      image: "",
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.title,
        type: this.taskType,
        location: this.location,
        image: this.image,
        description: 'This is a default description', // You can modify this as needed
        timing: 'N/A', // Default value, change as needed
        isOrganization: false, // Default value, change as needed
      };
      // Emit the event with the new task
      this.$emit('task-added', newTask);

      // Clear the input fields after submission
      this.title = "";
      this.taskType = "";
      this.location = "";
      this.image = "";
    },
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
  },
};

</script>
<style scoped>
#task-card-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

form {
  margin-bottom: 20px;
}

form div {
  margin-bottom: 12px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #358a6b;
}

.task-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.task-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.task-card-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
}

.task-card-content {
  text-align: left;
}

h3 {
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>