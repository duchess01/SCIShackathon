<template>
  <div class="card">
    <div class="font-semibold text-xl mb-4">My Profile</div>
    <div class="rounded-border border border-surface p-6">
        <div class="flex mb-4">
            <!-- Profile picture with larger size -->
            <img :src="user.profilePicture" alt="Profile Picture" class="mr-4 rounded-full" style="width: 6rem; height: 6rem;">
            <div>
                <!-- Larger font sizes for profile information -->
                <div class="font-bold text-2xl mb-2">{{ user.name }}</div>
                <div class="text-lg text-gray-600 mb-2"><b>Age: {{ user.age }}</b></div>
                <div class="text-lg text-gray-600"><b>Location: {{ user.location }}</b></div>
            </div>
        </div>
        <!-- Additional content with larger text -->
        <div class="text-lg text-gray-700">
          "{{ user.bio }}"
        </div>
        <div class="flex justify-between mt-4">
            <!-- Buttons -->
            <button class="bg-primary text-white py-2 px-4 rounded">Points: {{ user.points }}</button>
        </div>
    </div>
  </div>

  <!-- Centered Logout Button -->
  <div class="flex justify-center mt-4">
    <button @click="logout" class="bg-red-500 text-white py-2 px-4 rounded">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        profilePicture: '../../public/demo/images/profile.jpeg', // Mocked image path
        name: 'Joseph Tan',
        age: 21,
        location: 'Blk 56, West Coast Road, 138443',
        bio: `I’m a 21-year-old student based in Singapore, currently pursuing a degree in Computer Science. 
              With a passion for technology and innovation, I’m dedicated to both my academic pursuits and personal growth. 
              Outside of studies, I enjoy exploring the local food scene, hiking around the island, and dabbling in digital art. 
              I’m always looking for new experiences and opportunities to broaden my horizons. 
              My goal is to make a positive impact in the tech industry and contribute to the vibrant community here in Singapore.`,
        points: 200,
      },
    };
  },
  methods: {
    logout() {

      this.$router.push('/');
      console.log('Logging out...');
    },
  },
};
</script>
