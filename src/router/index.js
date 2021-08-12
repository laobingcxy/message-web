import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue')

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        component: () => import('../views/Chat.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    //debugger
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('token');
        if (!token) {
            next('/login');
        } else {
            next();
        }
    }
});

export default router
