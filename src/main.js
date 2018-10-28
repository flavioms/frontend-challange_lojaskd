import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV, faCaretDown, faCheckCircle, faInfoCircle, faCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
library.add(faEllipsisV, faCaretDown, faCheckCircle, faInfoCircle, faCircle, faClock);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
