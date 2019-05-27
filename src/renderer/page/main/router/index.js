// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'landing-page',
//       component: require('@/components/LandingPage').default,
//     },
//     {
//       path: '*',
//       redirect: '/',
//     },
//   ],
// });


import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/page/main/pages/Main';

Vue.use(Router);

export default new Router({
  // mode: 'hash',
  // base: __dirname,
  name: 'main',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
});

