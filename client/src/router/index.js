import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home'
import taskList from '@/components/task/taskList'
import homePage from '@/components/layout/homePage'
import dataSourceList from '@/components/dataSource/dataSourceList'
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
      path: '/task',
      name: 'task',
      component: Home,
      redirect: 'noredirect',
      children: [
        {
          path: 'list',
          name: 'task-list',
          component: taskList,
          meta: {
            keepAlive: false // 此组件不需要被缓存
          }
        },
        {
          path: 'detail',
          name: 'task-detail',
          component: () => import(/* webpackChunckName: "task-dettail" */ '@/components/task/taskDetail.vue'),
          meta: {
            keepAlive: false // 此组件不需要被缓存
          }
        }
      ]
    },
    {
      path: '/dataSource',
      name: 'dataSource',
      component: Home,
      redirect: 'noredirect',
      children: [
        {
          path: 'list',
          name: 'dataSource-list',
          component: dataSourceList
        }
      ]
    }
  ]
})
