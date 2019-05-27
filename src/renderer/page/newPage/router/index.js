import Vue from 'vue';
import Router from 'vue-router';
import NewPage from '@/page/newPage/pages/NewPage';

Vue.use(Router);

export default new Router({
  // mode: 'hash',
  name: 'NewPage',
  routes: [
    {
      path: '/',
      name: 'NewPage',
      component: NewPage
    },
    {
      path: '/NewPage',
      name: 'NewPage',
      component: NewPage
    },
  ]
});

