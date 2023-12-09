import { createRouter, createWebHistory } from "vue-router"; 
import PageHome from '@/views/PageHome';

const routes = [
  {
    path : '/',
    name : 'PageHome',
    component : PageHome
  },
  {
    path : '/about',
    name : 'About',
    component : () => import('@/views/PageAbout.vue')
  },
  {
    path : '/board/list',
    name : 'BoardList',
    component : () => import('@/views/board/BoardList.vue')
  }
];  

const router = createRouter({
  history : createWebHistory(process.env.BASE_URL),
  routes
})

export default router;