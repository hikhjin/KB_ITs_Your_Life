
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Input from '@/pages/Input.vue'
import List from '@/pages/List.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: "Home", component: Home },
        { path: '/list', name: "List", component: List },
        { path: '/input', name: "Input", component: Input },
    ]
})

export default router;