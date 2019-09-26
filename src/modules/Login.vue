
<template>
    <div id = "background">
        <div>
            <form id="divLogin">
                <div>
                    <center>
                        <h1>Login</h1>
                    </center>
                    <div class="form-group row">
                        <label for="loginEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="loginEmail" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="loginPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10"><br><br>
                            <input type="password" class="form-control" id="loginPassword" placeholder="Password">
                        </div>
                    </div>
                    <button id="btnLogin" class="btn btn-success btn-lg btn-block">
                        <h4>Login</h4>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #background {
        background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-size: 100%;
        padding-top: 15%;
        padding-bottom: 10%;
        
    }
    #divLogin {
        width: 30%;
        position: relative;
        left: 35%;
        background-color: rgb(200, 207, 204);
        border-radius: 5%;
        padding: 2%;
        
    }
</style>