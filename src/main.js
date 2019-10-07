import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from'./router';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueSweetAlert2 from 'vue-sweetalert2'

Vue.use(VueSweetAlert2);

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)
new Vue({
  render: h => h(App),
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')

