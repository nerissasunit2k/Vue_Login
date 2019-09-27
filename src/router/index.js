// export default {
//     routes: [{
//         path: '/Register',
//         name: 'register',
//         component: resolve => require(['modules/Register.vue'], resolve),
//         meta: {
//             tokenRequired: false
//         }
//     },
//     {
//         path: '/Login',
//         name: 'login',
//         component: resolve => require(['modules/Login.vue'], resolve),
//         meta: {
//             tokenRequired: false
//         }
//     },
//     {
//     path: '/Dashboard',
//     name: 'dashboard',
//     component: resolve => require(['components/frame/Dashboard.vue'],resolve),
//     meta: {
//         tokenRequired: false
//     }
//     }

// ]
// }
import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from './module_routes'

// global.$ = global.jQuery
Vue.use(Router)
export default new Router({
    routes: ModuleRoutes.routes
})