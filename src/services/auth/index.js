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
    register(username, password){
        this.registeredUser.push({
            username: username,
            password: password,
        })
        ROUTER.push('/login')
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