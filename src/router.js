import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home/index.vue')
  },
  {
    path: '/game-center',
    component: () => import('@/pages/GameCenter/index.vue')
  },
  {
    path: '/user-center',
    component: () => import('@/pages/UserCenter/index.vue')
  }

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
