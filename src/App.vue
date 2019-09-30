<template>
  <div id="app">
  <Header v-show = "$route.path === '/login' || $route.path === '/register'|| $route.path === '/' ? true: false"></Header>
  <AppBody></AppBody>
  <Sidebar v-show = "$route.path === '/dashboard' || $route.path === '/Subjects'|| $route.path === '/Account' ? true: false">
  </Sidebar>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import AUTH from 'services/auth'
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
import Sidebar from 'components/frame/Sidebar.vue'

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
  background-image:url(https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_960_720.jpg);
  background-size:cover;
}
</style>