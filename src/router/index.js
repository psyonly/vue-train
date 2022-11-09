import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main.vue'
import Home from '../views/home.vue'
import User from '../views/user.vue'

Vue.use(VueRouter)

// 1. Create router component
// create vue file in views folder

// 2. Use router component
const routes = [
    {
        path: '/', 
        component: Main,
        children: [
            {
                path: '/home', 
                component: Home
            },
            {
                path: '/user', 
                component: User
            }
        ]
    }
]

// 3. Create Router instance
const router = new VueRouter({
    routes,
})

export default router
