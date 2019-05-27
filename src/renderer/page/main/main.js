import Vue from 'vue';

import App from './App';
import router from './router';

/* eslint-disable no-new */
// new Vue({
//   components: { App },
//   router,
//   store,
//   template: '<App/>',
// }).$mount('#app');


// The Vue build version to load with the `import` command


if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

Vue.config.productionTip = false;

// 混入一些在全局使用的功能

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() { 
    
  }
});
