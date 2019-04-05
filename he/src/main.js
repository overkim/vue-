import Vue from 'vue';
import App from './App';
import router from './router';
import bus from './eventBus';
Vue.prototype.$bus = bus;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  bus,
  render:h=>h(App)
})
