import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: Home,
    },
  ],
});
