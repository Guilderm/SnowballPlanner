import { createRouter, createWebHistory } from 'vue-router';
import ComingSoon from '@/components/ComingSoon/ComingSoon.vue';

const routes = [
  {
    path: '/',
    name: 'ComingSoon',
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
