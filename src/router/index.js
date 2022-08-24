import { createRouter, createWebHistory } from 'vue-router'
import personalview from '../views/personalview.vue'
import skillview from '../views/skillview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'personal',
    //   component: () => import('../views/PersonalView.vue')
    // },
    { 
      path: '/', 
      name: 'personal', 
      component: personalview 
    },
    {
      path: '/skill',
      name: 'skill',
      component: skillview
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ]
})

export default router
