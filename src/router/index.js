import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main.vue'
import Home from '../views/home.vue'
import User from '../views/user.vue'
import Mall from '../views/shop.vue'
import PageOne from '../views/page_one'
import PageTwo from '../views/page_two.vue'

Vue.use(VueRouter)

// 1. Create router component
// create vue file in views folder

// 2. Use router component
const routes = [
    {
        path: '/', 
        component: Main,
        redirect: "/home",
        children: [
            {
                path: '/home', 
                component: Home
            },
            {
                path: '/user', 
                component: User
            },
            {
                path: '/mall', 
                component: Mall
            },
            {
                path: '/pageOne', 
                component: PageOne
            },
            {
                path: '/pageTwo', 
                component: PageTwo
            }
        ]
    }
]

// 3. Create Router instance
const router = new VueRouter({
    routes,
})

export default router
