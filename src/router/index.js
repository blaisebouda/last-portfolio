import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import ResizeImages from '../views/ResizeImages.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/about',
      component: Index
    },
    {
      path: '/home',
      component: Index
    },
    {
      path: '/competence',
      component: Index
    },
    {
      path: '/technos',
      component: Index
    },
    {
      path: '/realisations',
      component: Index
    },
    {
      path: '/contact',
      component: Index
    },
    {
      path: '/resizeimages',
      name: 'resize',
      component: ResizeImages,
      
    }
  ]
})

export default router
