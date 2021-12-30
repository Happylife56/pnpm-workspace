// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home/index.vue';

const routesModules = import.meta.globEager('../views/**/router/*.js');
const modules = [];
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default);
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...modules,
      {
        path: '/permission', // 权限操作
        name: 'permission',
        component: () => import('@/views/permission/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
