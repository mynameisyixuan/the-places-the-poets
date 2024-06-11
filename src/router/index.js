import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from '../components/Home1.vue';
import Home from '../components/Home.vue';
import MAIN from '../components/MAIN.vue';
import MAIN1 from '../components/MAIN1.vue';
import Pics from '../components/Pics.vue';
import MAIN2 from '../components/MAIN2.vue';
import MAIN3 from '../components/MAIN3.vue';
import MAIN4 from '../components/MAIN4.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home1',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/MAIN',
    name: 'MAIN',
    component: MAIN
  },
  {
    path: '/MAIN1',
    name: 'MAIN1',
    component: MAIN1
  },
  {
    path: '/Pics',
    name: 'Pics',
    component: Pics
  },
  {
    path: '/MAIN2',
    name: 'MAIN2',
    component: MAIN2
  },
  {
    path: '/MAIN3',
    name: 'MAIN3',
    component: MAIN3
  },
  {
    path: '/MAIN4',
    name: 'MAIN4',
    component: MAIN4
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
