import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/login",
    component: Login
  }]
})

export default router
