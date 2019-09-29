import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home'
import userList from '@/components/user/userList'
import homePage from '@/components/layout/homePage'
import animalList from '@/components/animal/animalList'
// import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/homePage' // 重定向到默认首页
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      meta: {
        keepAlive: false // 此组件不需要被缓存
      },
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          component: homePage
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Home,
      redirect: 'noredirect',
      children: [
        {
          path: 'list',
          name: 'user-list',
          component: userList,
          meta: {
            keepAlive: false // 此组件不需要被缓存
          }
        },
        {
          path: 'detail',
          name: 'task-detail',
          component: () => import(/* webpackChunckName: "task-dettail" */ '@/components/user/userDetail.vue'),
          meta: {
            keepAlive: false // 此组件不需要被缓存
          }
        }
      ]
    },
    {
      path: '/animal',
      name: 'animal',
      component: Home,
      redirect: 'noredirect',
      children: [
        {
          path: 'list',
          name: 'animal-list',
          component: animalList
        }
      ]
    }
  ]
})
