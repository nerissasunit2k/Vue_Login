<template>
  <div id="container">
    <div class="jumbotron">
    </div>
    <div id="card">
     <center><div>
        <b-img :src="require('assets/User.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
      </div></center><hr>
      <b-card no-body class="overflow-hidden" style="max-height: 560px;" >
        <b-row no-gutters>
          <b-col md="12">
          <center><b-card-body title="Personal Information"> 
                <hr>
                <b-card-text>
                <h6>Username: {{username}}</h6>
                <h6>Email:{{email}}</h6>
                <h6 type="password">Password: {{password}}</h6>
              </b-card-text>
            </b-card-body>
            </center>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style>
.jumbotron{
    padding: 20px;
    text-align: center;
    margin-bottom:0px;
}
#card {
    margin-top: 79px;
    margin-left: 380px;
    width:560px;
    height:700px;
}

</style>
<script>
export default {
  // name: "container",
  data() {
    return {
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },
};
</script>