import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ManualPage from '@/components/ManualPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/manual',
      name: 'manual',
      component: ManualPage
    }
  ]
});
