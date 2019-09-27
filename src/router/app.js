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
export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        },
    }]
}
