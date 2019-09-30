// import Router from 'router'
// export default{
//     user : null,
//     registeredUser: [],
//     setUser(user){
//         this.user=user
//     },
//     login(username,password){
//         for(let i=0;i<this.registeredUser.length;i++){
//             if(this.registeredUser[i].username===username&&this.registeredUser){
//                 return this.registeredUser[i]
//             }
//         }
//         return null
//     },
//     logout(){
//         this.user=null
//         Router.push('/login')
//     }

// }
import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(username, password) {
        this.registeredUser.push({
        username : username,
        password : password
        })
        ROUTER.push("/Login");
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                ROUTER.push('/Dashboard')
                return this.registeredUser[i]

            }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/Login')
    },
    addCourse(course, year){
        this.courses.push({
            course: course,
            year: year,
        });
        var p = JSON.parse(JSON.stringify(this.courses))
        console.log(p)
    },
    editProfile(){
        ROUTER.push('/edit')
    }

}