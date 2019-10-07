<template>
  <div id="container">
    <center>
      <div id="card">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="require('assets/Nerissa.png')" class="rounded-0" id="userIcon"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Personal Info">
                <hr>
                <b-card-text>
                  <h6>Username: {{username}}</h6>
                  <h6>Email: {{email}}</h6>
                  <h6 type="password">Password: {{password}}</h6>
                </b-card-text>
                <center>
                  <p>Do you want to edit your account?</p>
                  <router-link to="/Update">Edit</router-link>
                </center>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </center>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/colors.scss";
#userIcon {
  padding: 2em;
  width: 110%;
  height: auto;
}
b-card-text {
  text-align: left;
}
.mt-3 {
  margin: 30%;
  box-shadow: 5px 10px 18px #888888;
  //   background-color: $bckg_color !important;
}
</style>

<script>
// import ROUTER from 'router'
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth: AUTH,
      Uname: sessionStorage.getItem("Username"),
      Email: sessionStorage.getItem("Email"),
      Pass: sessionStorage.getItem("Password")
    };
  },
methods: {
    update: function() {
      AUTH.update(this.username, this.email, this.password);
    }
  }
};
</script>
