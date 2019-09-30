import AUTH from '../services/auth'
let beforeEnter = (to ,from ,next) => {

 AUTH.currentPath = to.path
// let userID = parseInt(localStorage.getItem('account_id'))
// let token  = localStorage.getItem('usertoken')
// // if(token !== null && )
//console.log();
next()

}

var devRoutes = [] ;
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x =0 ; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] =  beforeEnter
}
//deafualt route
let routes = [
{
    path:'/',
    name:'home',
    components:resolve => require (['modules/basic/Login.vue'] ,resolve),
    beforeEnter:beforeEnter
}
]
//export
routes = routes.concat(devRoutes)
export default{
    routes:routes
}