import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import ReviewView from '@/views/ReviewView.vue'
import { ROUTES } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "navigation__link--active",
  routes: [
    {
      path: ROUTES.MAIN,
      name: 'home',
      component: HomeView
    },
    {
      path: ROUTES.CATALOG,
      name: 'catalog',
      component: CatalogView
    },
    {
      path: ROUTES.REVIEW,
      name: 'review',
      component: ReviewView
    },
  ]
})

export default router
