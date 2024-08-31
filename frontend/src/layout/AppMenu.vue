<script setup>
import { ref, computed } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

// Get user role from local storage
const userRole = ref(localStorage.getItem('userRole'));

// Define menu items with conditional logic
const model = computed(() => {
  // Define the common menu items
  const items = [
      {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
 
        ...(userRole.value === 'admin' 
          ? [{ label: 'Leaderboard', icon: 'pi pi-fw pi-star', to: '/leaderboard' }] 
          : [{ label: 'Rewards', icon: 'pi pi-fw pi-star', to: '/rewards' }]
        ),
      
        { 
          label: 'Tasks',
          icon: 'pi pi-fw pi-id-card',
          to: userRole.value === 'admin' ? '/createtasks' : '/tasks'
        }
      ]
    },

  ];
 
  return items;
});
</script>


<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
