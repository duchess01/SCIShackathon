<template>
    <div class="earn-rewards-page container mx-auto px-4 py-8">
      <!-- Page Title -->
      <h1 class="text-5xl font-bold text-center mb-8">Reward Redemption</h1>
  
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
  
      
        </div>

  </template>
  
  // remove when connecting to db
  <script>
  export default {
    data() {
      return {
        karmaPoints: 12000, // Example value; replace with real data
        rewards: [
          { id: 1, name: 'Lazada Gift Card $ 50', requiredKarma: 5000, image: '../../public/demo/images/laz.png' },
          { id: 2, name: 'Aeon Voucher $ 50', requiredKarma: 6000, image: '../../public/demo/images/aeon.jpg' },
          { id: 3, name: 'Starbucks Voucher $ 50', requiredKarma: 6000, image: '../../public/demo/images/starbuc.png' },
          { id: 4, name: 'Coffee Bean Voucher $ 50', requiredKarma: 6000, image: '../../public/demo/images/cof.jpg' },
          { id: 5, name: 'Secret Recipe Voucher $ 50', requiredKarma: 6000, image: '../../public/demo/images/sec.png' },
          { id: 6, name: 'KFC Voucher $ 50', requiredKarma: 6000, image: '../../public/demo/images/kfc.png' },
        ],
        leaderboard: [
          { id: 1, name: 'James Butt', score: 15000 },
          { id: 2, name: 'Josephine Darakjy', score: 12000 },
          { id: 3, name: 'Art Venere', score: 11000 },

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
  ./rewards.vue