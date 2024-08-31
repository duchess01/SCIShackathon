import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [

                {
                    path: '/',
                    name: 'landing',
                    component: () => import('@/views/pages/Landing.vue')
                },

                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/user-dashboard',
                    name: 'user-dashboard',
                    component: () => import('@/views/UserDashboard.vue')
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('@/views/Profile.vue')
                },

                {
                    path: '/rewards',
                    name: 'Rewards',
                    component: () => import('@/views/Rewards.vue')
                },
                {
                    path: '/tasks',
                    name: 'tasks',
                    component: () => import('@/views/tasks.vue')
                },
                {   path: '/leaderboard',
                    name: 'leaderboard',
                    component: () => import('@/views/Leaderboard.vue')
                },
                {
                    path: '/createtasks',
                    name: 'createtasks',
                    component: () => import('@/views/createtasks.vue')
                },
                
                {
                    path: '/pages/rewards',
                    name: 'rewards',
                    component: () => import('@/views/Rewards.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        }

    ]
});

export default router;
