import { createRouter, createWebHistory } from "vue-router"; 
import PageHome from '@/views/PageHome';
import UserDetail from '@/views/board/UserDetail.vue';

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
  },
  {
    path : '/user/detail',
    name : 'BoardDetail',
    component : UserDetail
  }
];  

const router = createRouter({
  history : createWebHistory(process.env.BASE_URL),
  routes
})

export default router;