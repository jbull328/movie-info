import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movieDetail:id',
      name: 'movieDetail:id',
      component: () => import('../views/MovieDetailView.vue'),
      props: true
    }
  ]
})

export default router
