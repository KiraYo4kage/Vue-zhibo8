import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'
import Home from '@/views/Home'
import Videos from '@/views/Video'
import News from '@/views/News'

import homeModule from './home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '/layout',
          redirect: '/layout/home'
        },
        {
          path: '/layout/home',
          component: Home,
          children: homeModule
        },
        {
          path: '/layout/video',
          component: Videos
        },
        {
          path: '/layout/news',
          component: News
        }
      ]
    }
  ]
})
