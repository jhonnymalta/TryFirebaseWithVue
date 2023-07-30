import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/',
    name:'home',
    component:()=>import('./views/home.vue')
    },
    {path: '/login',
    name:'login',
    component:()=>import('./views/login.vue')
    },
    {path: '/register',
    name:'register',
    component:()=>import('./views/Register.vue')
}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;