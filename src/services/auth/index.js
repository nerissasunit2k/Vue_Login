import Router from 'router'
export default{
    user : null,
    registeredUser: [],
    setUser(user){
        this.user=user
    },
    login(username,password){
        for(let i=0;i<this.registeredUser.length;i++){
            if(this.registeredUser[i].username===username&&this.registeredUser){
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout(){
        this.user=null
        Router.push('/login')
    }

}