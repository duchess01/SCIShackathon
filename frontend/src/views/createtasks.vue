<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-links">
        <button @click="currentView = 'accept'" :class="{ active: currentView === 'accept' }">Create Task</button>
        <button @click="currentView = 'current'" :class="{ active: currentView === 'current' }">Created Tasks</button>
      </div>
    </nav>
    <br>
    <!-- Content Based on Selected View -->
    <div id="task-card-page">
      <h1 style="text-align: center; font-family: Arial, sans-serif; color: #333;">Create a Task Card</h1>
<div style="width: 400px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); background-color: #f9f9f9;">
    <form @submit.prevent="addTask">
        <div style="margin-bottom: 15px;">
            <label for="title" style="display: block; font-weight: bold; margin-bottom: 5px;">Title:</label>
            <input v-model="title" type="text" id="title" required style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 15px;">
            <label for="taskType" style="display: block; font-weight: bold; margin-bottom: 5px;">Task Type:</label>
            <input v-model="taskType" type="text" id="taskType" required style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 15px;">
            <label for="location" style="display: block; font-weight: bold; margin-bottom: 5px;">Location:</label>
            <input v-model="location" type="text" id="location" required style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 15px;">
            <label for="image" style="display: block; font-weight: bold; margin-bottom: 5px;">Timing</label>
            <input v-model="image" type="datetime-local" id="time" required style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 15px;">
            <label for="image" style="display: block; font-weight: bold; margin-bottom: 5px;">Image URL:</label>
            <input v-model="image" type="text" id="image" required style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box;" />
        </div>
        <button type="submit" style="width: 100%; padding: 10px; border-radius: 5px; border: none; background-color: #007bff; color: white; font-size: 16px; cursor: pointer;">Add Task Card</button>
    </form>
</div>

  </div>
  </div>
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