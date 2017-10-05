import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

import home from './components/default.vue'
import appState from './components/appState.vue'
import createTc from './components/createTestCase.vue'
import test from './components/test.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/appState',
      component: appState
    },
    {
      path: '/createTC',
      component: createTc
    },
    {
      path: '/test',
      component: test
    }
  ]
})

const app = new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

