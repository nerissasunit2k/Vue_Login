<template>
  <div id="app">
  `<Header></Header>
    <Sidebar id="side"
    v-show="$route.path === '/Dashboard' || $route.path === '/Subjects' || $route.path === '/Account' || $route.path === '/Update'? true : false"></Sidebar>
    <AppBody></AppBody>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import AUTH from 'services/auth'
import Header from 'components/frame/Header.vue';
import AppBody from 'components/frame/Body.vue';
import Sidebar from 'components/frame/Sidebar.vue';

export default {
  name: 'app',
  // auth: AUTH,
  components: {
    Header,
    AppBody,
    Sidebar
  }
}
</script>
<style>
#app{
  background-image:url(https://previews.123rf.com/images/stori/stori1603/stori160300019/54292054-beautiful-flowers-romantic-pink-veil-on-white-best-romantic-flower-background.jpg);
  background-size:cover;
}
</style>