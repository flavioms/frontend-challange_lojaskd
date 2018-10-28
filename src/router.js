import Vue from 'vue';
import Router from 'vue-router';
import Splash from './views/Splash.vue';
import Login from './views/Login.vue';
import Pedido from './views/Pedido.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: Pedido,
    },
  ],
});
