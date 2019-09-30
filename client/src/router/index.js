import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  fallback: true
})
