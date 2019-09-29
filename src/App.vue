<template>
  <div id="app">
    <Header v-show = "$route.path === '/Login' || $route.path === '/Register'|| $route.path === '/' ? true: false"></Header>
  <AppBody></AppBody>
  <Sidebar v-show = "$route.path === '/Dashboard'">
  </Sidebar>
  <Sidebar>
    <span class="glyphicon glyphicon-envelope"></span>
  </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'components/frame/Sidebar.vue'
import Header from './components/frame/Header.vue'
import AppBody from './components/frame/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody,
    Sidebar
  }
}
</script>
<style scoped>
</style>