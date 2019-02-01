import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
Vue.use(Router)

var router = new Router({
  routes: [
    {name:'lohin',path:'/login',component:Login}
  ]
})
router.beforeEach((to,from,next) =>{
  if(to.path !== '/login'){
    var token = window.localStorage.getItem('token')
    if(!token){
      router.push('/login')
      Message.error('请登录')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router