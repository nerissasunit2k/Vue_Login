<template>
  <div id="app">
  <Header></Header>
  <AppBody></AppBody>
  </div>
</template>

<script>

// import Register from './modules/Register.vue'
import Header from './components/frame/Header.vue'
//import Body from './components/frame/Body.vue'
import AppBody from './components/frame/Body.vue'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  name: 'app',
  components: {
    Header,
    AppBody,
    SidebarMenu
  }
}
</script>