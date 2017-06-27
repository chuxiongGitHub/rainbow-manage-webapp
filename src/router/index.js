import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
Vue.use(Router)

const routers = new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: resolve => require(['@/components/app/App'], resolve) }
  ]
})

routers.beforeEach((to, from, next) => {
  iview.LoadingBar.start()
  next()
})
routers.afterEach((to, from, next) => {
  iview.LoadingBar.finish()
})

export default routers
