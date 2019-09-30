export default {
    routes: [{
        path: '/login',
        name: 'login',
        component: resolve =>require(['modules/basic/Login.vue'],resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve =>require(['modules/basic/Register.vue'],resolve),
        meta: {
            tokenRequired: false
        }  
    },
    // {
    //     path : '/sidebar',
    //     name : 'sidebar',
    //     component : resolve => require(['components/frame/Sidebar.vue'], resolve),
    //     meta : {
    //         tokenRequired : false
    //     }
    // },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['modules/basic/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: false
        },
    },
    {
        path: '/account',
        name: 'account',
        component: resolve => require(['modules/basic/Account.vue'], resolve),
        meta: {
            tokenRequired: false
        },
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        component: resolve => require(['modules/basic/Subjects.vue'], resolve),
        meta: {
            tokenRequired: false
        },
    
    }]
}