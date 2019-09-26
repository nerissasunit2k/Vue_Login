<template>    
<div id= "background">
        <form id="divFrom">
            <center>
                <h1>Register</h1>
            </center>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputfname">Firstname</label>
                    <input type="text" class="form-control" id="inputfname" placeholder="Firstname">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputlname">Lastname</label>
                    <input type="text" class="form-control" id="inputlname" placeholder="Lastname">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                    <div id="feedback" class="feedColor"></div>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>

            <button id="btnSubmit" type="submit" class="btn btn-primary btn-lg btn-block">Register</button>

        </form>
    </div>
</template>
<style scoped>
#background {
    background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    padding-top: 0.5%;
    padding-bottom: 10%;
        
    }
#divFrom {
    width: 30%;
    position: relative;
    left: 35%;
    margin-top: 10%;
    background-color: rgb(200, 207, 204);
    border-radius: 5%;
    padding: 2%;
}
</style>