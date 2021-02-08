// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import './assets/sass/style.scss'
//import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  //vuetify,
  template: '<App/>'
})
