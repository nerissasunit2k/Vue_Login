import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    setUser(user){
        this.user = user
    },
    getUser(user){
        return this.user = user;
    },
    register(username, password, email, confirmpassword) {
        if (username == '' || password == '' || email == '' || password != confirmpassword) {
            ROUTER.push("/Register")
        } else {
            this.registeredUser.push({
                username: username,
                password: password,
                email: email
            });
            ROUTER.push("/Login");
        }
    },
    login( username , password ){
        for(let i = 0; i < this.registeredUser.length; i++){
            if(this.registeredUser[i].username === username && this.registeredUser[i].password === password){
                ROUTER.push('/dashboard')
                return this.registeredUser[i]           
            }
        }
        return null
    },
    logout(){
        this.registeredUser = null
        ROUTER.push('/login')
    },
    addCourse(course, year, schedule, room, teacher) {
        this.courses.push({
            course: course,
            year: year,
            schedule: schedule,
            room: room,
            teacher: teacher,
        });
    
    },
    update(username,password) {
        this.username =username;
        this.password =password;
        ROUTER.push('/Update')
    },
    save(username, email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            this.registeredUser[i].username = username,
                this.registeredUser[i].email = email,
                this.registeredUser[i].password = password
        }
        alert('Update Succesfully!')
        
        ROUTER.push('/personalInformation')
    }

}