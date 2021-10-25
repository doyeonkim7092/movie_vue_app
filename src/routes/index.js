import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
    //hash, history
    //hashmode -> https://google.com/#/search
    history: createWebHashHistory(),
    // page 구분
    // https://google.com/about
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})
