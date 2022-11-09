import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
