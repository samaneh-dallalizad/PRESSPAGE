import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../components/HomePage/index.vue'
import Users from './../components/Users/index.vue'

const routes = [

    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/users',
        name: 'users',
        component: Users,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
