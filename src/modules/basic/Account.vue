<template>
  <center>
  <div id="container">
    <div class="jumbotron">
      <h1>Personal Information</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img id="pic" :src="require('assets/Nerissa.png')" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Personal Info">
                <hr>
              <b-card-text>
                <h6>Username: {{firstname}}</h6>
                <h6>Email: {{email}}</h6>
                <h6 type="password">Password: {{password}}</h6>
               <center>
                  <p>Do you want to edit your account?</p>
                  <router-link to="/Update">Edit</router-link>
                </center>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
  </center>
</template>

<style>
.jumbotron{
    padding: 15px;
}
#card {
  margin-top: 50px;
}
</style>
<script>
// import ROUTER from "router"
import AUTH from 'services/auth'
export default {
  name: "container",
  data() {
    return {
      firstname: sessionStorage.getItem("Firstname"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password"),
      profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugznlxaKe8PmdqZIN3dtOI2Iktd_cXtfwo6YpDGnImSk7qCDJ7w"
    };
  },
  methods: {
    Update: function() {
      AUTH.Update(this.username, this.email, this.password);
    }
  }
};
</script>