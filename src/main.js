import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';

Vue.use(VueRouter);

const routes = [
  {path:'/', component: Home},
  {path:'/login', component: Login},
  {path:'/register', component: Register},
  {path:'/forgotPassword', component: ForgotPassword},
  {path:'*', redirect:'/login'}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App);
  }
});
