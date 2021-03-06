export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/basic/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/basic/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, {
        path: '/Dashboard',
        name: 'Dashboard',
        component: resolve => require(['modules/basic/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        },
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        component: resolve => require(['modules/basic/Subjects.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/Account',
        name: 'Account',
        component: resolve => require(['modules/basic/Account.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/Update',
        name: 'Update',
        component: resolve => require(['modules/basic/Update.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
     {
        path: '/Logout',
        name: 'logout',
        component: resolve => require(['modules/basic/Logout.vue'], resolve),
        meta: {
            tokenRequired: true
            }
    
    }]
}