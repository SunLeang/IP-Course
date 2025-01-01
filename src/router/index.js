import { createRouter, createWebHistory } from 'vue-router';
import Page from '@/views/PageView.vue';
import HomePage from '@/views/HomePage.vue';
import Section from '@/views/Section.vue';


const router = createRouter({
  history: createWebHistory(), // Use browser history
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/page/1",
      component: HomePage,
      children: [
        {
          path: '/page/:pageNumber',
          component: Page,
          children: [
            {
              path: '/section/:sectionNumber',
              component: Section,
            }
          ],
        },
      ],
    },
  ],
});

export default router;
