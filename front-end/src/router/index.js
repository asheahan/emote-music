import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ManualPage from '@/components/ManualPage';
import ImagePage from '@/components/ImagePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home',
        icon: 'home'
      }
    },
    {
      path: '/manual',
      name: 'manual',
      component: ManualPage,
      meta: {
        title: 'Manual',
        icon: 'build'
      }
    },
    {
      path: '/image',
      name: 'image',
      component: ImagePage,
      meta: {
        title: 'Image',
        icon: 'portrait'
      }
    }
  ]
});
