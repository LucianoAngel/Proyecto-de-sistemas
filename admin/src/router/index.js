import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Usuarios from '../views/Usuarios.vue';
import SolicitudId from '../views/SolicitudId.vue';
import {
  necesitaAutenticacion,
  noNecesitAutenticacion,
} from '../helper/manejoAutentacion';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/detallesVisa/:visaId',
    name: 'SolicitudId',
    component: SolicitudId,
    beforeEnter: necesitaAutenticacion,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: noNecesitAutenticacion,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;