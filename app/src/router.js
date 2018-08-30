import VueRouter from 'vue-router';
import Animals from './components/animals/Animals.vue';
import Home from './components/home/Home.vue';
import AddAnimal from './components/animals/AddAnimal.vue';
import DetailView from './components/animals/DetailView.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: Animals },
    { path: '/add', component: AddAnimal },
    { path: '/:id', component: DetailView },
    { path: '*', redirect: '/' }
  ]
});