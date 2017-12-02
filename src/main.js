import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/styles/fonts/index.css'
// import './assets/styles/fonts/row.css'
// import './assets/styles/fonts/col.css'
import routes from './route.config';
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import SideNav from './components/side-nav';
import title from './i18n/title.json';

import ElCol from './components/col'
import ElRow from './components/row'

Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);

Vue.component(ElCol.name, ElCol);
Vue.component(ElRow.name, ElRow);
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'Element';
});

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
