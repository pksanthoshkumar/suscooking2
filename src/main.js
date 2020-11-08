import './assets/recipes.json';
import './assets/sus-adds.json';
import './assets/style.css'
import './assets/sus-style.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

