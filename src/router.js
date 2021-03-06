import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',//点击选中的样式
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path: 'list',
                    name: 'list',
                    component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
                },
                {
                    path: 'user',
                    name: 'user',
                    component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
                }
            ]
        },
        {
            path: '/add',
            name: 'add',
            component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () => import(/* webpackChunkName: "info" */ './views/Info.vue')
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
