<template>
  <div id="card" >
    <center><hr>
      <h2></h2>
       <h1></h1>
      <div>
        <b-img :src="require('assets/Nerissa.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img><hr>
      </div>
      <h2>Hi {{Uname}},</h2>
      <h2>Welcome to Kat-on</h2>
      <p></p>
    </center>
  </div>
</template>
<style scoped>
#card {
  margin-top: 0px;
  margin-left: 380px;
  margin-bottom:0px;
  width:560px;
  height:700px;
}
#userIcon {
  width: 35%;
  height: auto;
}
h2 {
  font-size:50px;
}
</style>

<script>
import AUTH from "services/auth";
export default {
  name: "card",
  auth: AUTH,
  data() {
    return {
      Uname: sessionStorage.getItem("Username")
    };
  },
  
};
</script>

