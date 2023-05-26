import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home/index.vue')
  },
  {
    path: '/user-center',
    component: () => import('@/pages/UserCenter/index.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
