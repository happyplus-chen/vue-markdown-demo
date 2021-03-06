import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Md from '../../docs/main.vue'
import '../assets/styles/common.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/md',
      name: 'md',
      component: Md
    }
  ]
})
