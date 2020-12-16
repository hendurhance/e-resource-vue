import Vue from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'


Vue.config.productionTip = false
Vue.component('base-card', BaseCard)

new Vue({
  render: h => h(App),
}).$mount('#app')
