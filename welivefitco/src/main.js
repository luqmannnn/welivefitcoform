import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Output from './components/Output.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/output',
      name: 'output',
      component: Output,
    }
  ]
});

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
