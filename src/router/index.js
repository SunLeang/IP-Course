import CategoryView from '@/views/CategoryView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: CategoryView,
      props: true,
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: ProductView,
    },
  ],
})

export default router
