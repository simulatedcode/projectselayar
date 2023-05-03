import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue'
import Tentang from './views/Tentang.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
