import VueRouter from 'vue-router';
import List from './components/animals/Animals.vue';
import Home from './components/home/Home.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '*', redirect: '/' }
  ]
});