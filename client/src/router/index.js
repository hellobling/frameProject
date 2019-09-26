import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home'
import taskList from '@/components/task/taskList'
// import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/task/list' // 重定向到默认首页
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      meta: {
        keepAlive: false // 此组件不需要被缓存
      }
    },
    {
      path: '/task',
      name: 'task',
      component: Home,
      redirect: 'noredirect',
      children: [
        {
          path: 'list',
          component: taskList
        }
      ]
    }
  ]
})
