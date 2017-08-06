import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
Vue.use(Router)

const routers = new Router({
  mode: 'history',
  base: '/app',
  routes: [
    { path: '/user', name: 'user', component: resolve => require(['@/components/user/View.vue'], resolve) },
    { path: '/', name: 'student', component: resolve => require(['@/components/student/View'], resolve) },
    { path: '/teacher', name: 'teacher', component: resolve => require(['@/components/teacher/View'], resolve) },
    { path: '/map', name: 'map', component: resolve => require(['@/components/map/Map'], resolve) },
    { path: '/search', name: 'search', component: resolve => require(['@/components/search/View'], resolve) }
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
