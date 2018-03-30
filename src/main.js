// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VueParticles)
Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})