import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Shop from '@/components/Shop';
import Contact from '@/components/Contact';
import Services from '@/components/Services';

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
      component: Shop,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
  ],
});
