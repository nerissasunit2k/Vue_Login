<template>
  <div id = "body">
    <b-container class="bv-example-row">
      <b-row id = "row">
        <b-col>

        </b-col>
        <b-col id="top" cols = "5">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Username"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="email"
              required
              placeholder="Username"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input id="input-2" v-model="form.password" required placeholder="Password" type="password"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Log in</b-button>
          <b-button type="reset" variant="info">Register</b-button>
        </b-form>
        
        </b-col>
        <b-col>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // console.log("Username: " + this.form.username);
      // console.log("Password: " + this.form.password);
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.username = "";
      this.form.password = "";
    }
  }
};
</script>

<style scoped>
#top{
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuAxu_07_sc_sA-NA_bXTY4NuIUB7CoxgclMx24fcUdvTsUHt);
  background-size: cover;
  padding: 3vw 4vw 5vw;
  border-radius: 4px;
  text-align: center;
}

</style>
