import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import LangFlag from 'vue-lang-code-flags';

Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
