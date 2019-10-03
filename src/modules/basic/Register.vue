<template>
<body id="app">
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col id = "top" cols="5">
        <b-card 
         title="SIGN UP"
          style="margin-top:20%"
        ></b-card>
        <br>
          <b-form v-if="show">
            <b-form-group id="UserName" label="Username" label-for="username">
              <b-form-input
                id="username"
                v-model="form.username"
                type="text"
                required
                placeholder="Enter UserName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="emailAddress" label="Email Address" label-for="userEmail">
              <b-form-input
                id="userEmail"
                v-model="form.userEmail"
                type="email"
                required
                placeholder="Enter Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="initialUserPassword" label="Password" label-for="initialPassword">
              <b-form-input
                id="initialPassword"
                v-model="form.password"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="confirmPassword" label="Confirmed Passsword" label-for="confirmPassword">
              <b-form-input
                id="confirmPassword"
                v-model="form.confirmPassword"
                type="password"
                required
                placeholder="Confirm Password"
              ></b-form-input>
            </b-form-group>

            <center><b-button @click="register" variant="primary">Submit</b-button></center>
          </b-form><br>
             <p>Already have an account?</p>
        <router-link to="/Login">Login</router-link>

      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</body>
</template>
<script>
import AUTH from 'services/auth'
import jquery from 'jquery'
export default {
  data() {
    return {
      auth:AUTH,
      form: {
        username: "",
        userEmail: "",
        initialPassword: "",
        confirmPassword: ""
      },
      show: true
    };
  },
   methods: {
    // submit: function(e) {
    //   e.preventDefault();
    //     sessionStorage.setItem("Username", this.content.username),
    //     sessionStorage.setItem("Email", this.content.email),
    //     sessionStorage.setItem("Password", this.content.password);
    //   if (
    //     this.content.username == "" ||
    //     this.content.email == "" ||
    //     this.content.password == "" ||
    //     this.content.conpassword == ""
    //   ) {
    //     this.$swal.fire(
    //       "Please provide inputs",
    //       "Inputs are required!",
    //       "warning"
    //     );
    //   } else if (this.content.password != this.content.conpassword) {
    //     this.$swal.fire("Password Mismatch!", "Type properly!", "error");
    //   } else {
    //     AUTH.register(
    //       this.content.username,
    //       this.content.password,
    //       this.content.email,
    //       this.content.conpassword
    //     );
    //     this.$swal.fire("You are registered!", "Nice one!", "success");
    //   }
    // },
    //  onSubmit(evt){
    //   evt.preventDefault();
    //   sessionStorage.setItem("Username", this.form.username)
    //   sessionStorage.setItem("Email", this.form.userEmail)
    //   sessionStorage.setItem("Password", this.form.password)
    //   AUTH.register(this.form.email, this.form.password)
    //  }
    //   // checkForm(event) {
    //   //   event.preventDefault();
    //   //   event.target.classList.add('was-validated');
    //   // }
    // }
    register() {
      let link = `http://localhost:3000/db/create/${this.form.username}/${this.form.userEmail}/${this.form.password}`
      jquery.ajax({
        url: link,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': "*"
        }
      }).then(response => {
        alert(response.username)
      })

    }
   }
};
</script>

<style scoped>
#body {
  background-image:url(https://thumbs.dreamstime.com/b/tropical-beach-sand-summer-holiday-background-travel-vacation-free-space-text-product-placement-93404396.jpg);
  background-size: cover;
}
#top{
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuAxu_07_sc_sA-NA_bXTY4NuIUB7CoxgclMx24fcUdvTsUHt);
  background-size: cover;
  padding: 3vw 4vw 5vw;
  border-radius: 4px;
  text-align: center;
  margin-top:5%;
}
</style>