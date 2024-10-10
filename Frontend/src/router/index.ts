// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ComingSoon from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'ComingSoon',
    component: ComingSoon,
  },
  // ...other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
