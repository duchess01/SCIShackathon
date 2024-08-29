<template>
    <div class="earn-rewards-page container mx-auto px-4 py-8">
      <!-- Page Title -->
      <h1 class="text-5xl font-bold text-center mb-8">Reward Redemption</h1>
  
      <!-- User Karma Points -->
      <div class="user-karma text-center mb-8 p-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md">
        <h2 class="text-3xl font-semibold">Your Karma Points: {{ karmaPoints }}</h2>
      </div>
  
      <!-- Leaderboard Section -->
      <div class="leaderboard-section mb-12">
        <h2 class="text-4xl font-semibold text-center mb-6">Leaderboard</h2>
        <div class="leaderboard p-4 rounded-lg shadow-lg">
          <ul class="leaderboard-list">
            <li
              v-for="(user, index) in leaderboard"
              :key="user.id"
              :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'"
              class="flex justify-between items-center p-3 mb-2 rounded-md"
            >
              <span class="font-bold text-xl">{{ user.name }}</span>
              <span class="text-gray-600 font-bold text-xl">{{ user.score }} Points</span>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Rewards Section -->
      <div class="rewards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="reward in rewards"
          :key="reward.id"
          class="p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
        >
          <img :src="reward.image" alt="Reward Image" class="w-full h-40 object-contain mb-4" />
          <h3 class="font-bold text-xl mb-2">{{ reward.name }}</h3>
          <p class="text-gray-500 font-semibold text-lg mb-4">{{ reward.requiredKarma }} Karma</p>
          <button
            class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300"
            :disabled="karmaPoints < reward.requiredKarma"
            @click="redeemReward(reward)"
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  </template>
  
  // remove when connecting to db
  <script>
  export default {
    data() {
      return {
        karmaPoints: 12000, // Example value; replace with real data
        rewards: [
          { id: 1, name: 'Lazada Gift Card $ 50', requiredKarma: 5000, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Aeon Voucher $ 50', requiredKarma: 6000, image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Starbucks Voucher $ 50', requiredKarma: 6000, image: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Coffee Bean Voucher $ 50', requiredKarma: 6000, image: 'https://via.placeholder.com/150' },
          { id: 5, name: 'Secret Recipe Voucher $ 50', requiredKarma: 6000, image: 'https://via.placeholder.com/150' },
          { id: 6, name: 'KFC Voucher $ 50', requiredKarma: 6000, image: 'https://via.placeholder.com/150' },
        ],
        leaderboard: [
          { id: 1, name: 'Alice', score: 15000 },
          { id: 2, name: 'Bob', score: 12000 },
          { id: 3, name: 'Charlie', score: 11000 },
          { id: 4, name: 'Diana', score: 9500 },
          { id: 5, name: 'Eve', score: 8000 },
        ],
      };
    },
    methods: {
      redeemReward(reward) {
        if (this.karmaPoints >= reward.requiredKarma) {
          this.karmaPoints -= reward.requiredKarma;
          alert(`You have successfully redeemed ${reward.name}!`);
          // Add logic here to update the backend or perform additional actions
        } else {
          alert('Not enough Karma points to redeem this reward.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .earn-rewards-page {
    min-height: 100vh; /* Ensure full height */
    background-color: #f0f4f8; /* Light background color */
  }
  
  button:disabled {
    cursor: not-allowed;
    background-color: #d3d3d3; /* Gray color for disabled button */
  }
  
  button:hover:enabled {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
  
  .leaderboard {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .leaderboard-list li {
    font-size: 1.5rem;
  }
  
  .user-karma {
    margin-bottom: 2rem;
  }
  </style>
  