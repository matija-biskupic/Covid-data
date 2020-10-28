// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import theme from './plugins/theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.prototype.$http = axios
// Sets the default url used by all of this axios instance's requests
axios.defaults.baseURL = 'https://api.covid19api.com'

axios.interceptors.request.use((config) => {
  store.commit('loading', true)
    return config
  }, (error) => {
    store.commit('loading', false)
    return Promise.reject(error)
  })

axios.interceptors.response.use((response) => {
  store.commit('loading', false)
    return response
  }, (error) => {
    store.commit('loading', false)
    return Promise.reject(error)
  })

// Sync store with router
sync(store, router)

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})

Vue.use(Loading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
