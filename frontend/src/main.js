// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { InfiniteScroll, Lazyload, Spinner } from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from './lib/axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(InfiniteScroll)
Vue.use(Lazyload)
Vue.component(Spinner.name, Spinner)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
