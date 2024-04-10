import { createRouter, createWebHistory } from 'vue-router'
import Students from '../components/Students.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Students
    },
    {
      path: '/add-student',
      name: 'add',
      component: () => import('../components/AddStudent.vue')
    },
    {
      path: '/edit-student/:id',
      name: 'edit',
      component: () => import('../components/EditStudent.vue')
    }
  ]
})

export default router
