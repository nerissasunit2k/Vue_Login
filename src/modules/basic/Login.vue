<template>

  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
     <b-col id="top" cols="5">
        <b-card
         title="LOGIN"
          style="margin-top:20%"
        ></b-card>
      <br>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="username" label="Username" label-for="username" >
            <b-form-input
              id="username"
              v-model="form.username"
              required
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="Password" label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              required
              placeholder="Password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="rememberPassword">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Remember password?</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

         <center><b-button type="submit" variant="primary">Login</b-button></center>
        </b-form>
    
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
//eslint-disable-next-line
/*eslint-disable*/
import AUTH from 'services/auth'
 export default {
  data() {
    return {
      form: {
       username: "",
        password: "",
        // checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      AUTH.login(this.form.email, this.form.password)
      console.log(JSON.stringify(this.form));
    }
  }
};
</script>


<style scoped>
#body{
  background-image: url(http://www.pptbackgrounds.org/uploads/children-education-backgrounds-wallpapers.jpg);
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
