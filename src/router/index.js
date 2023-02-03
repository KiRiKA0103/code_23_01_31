import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/login', component: Login },
    { path: '/main', component: Main },
    // 开启props传参 在Movie组件中接收动态参数
    { path: '/movie/:id', component: Movie, props: true },
    {
      path: '/about',
      redirect: '/about/tab1',
      component: About,
      children: [
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    }
  ]
})

router.beforeEach(function(to, from, next) {
  // // to 表示将要访问路由的信息对象
  // console.log(to)
  // // from 表示将要离开路由的信息对象
  // console.log(from)
  // // next()表示放行
  // next()

  // 1. 要拿到用户将要访问的hash地址
  // 2. 判断hash地址是否等于/main
  // 2.1 如果等于/main 证明需要登录之后才能访问成功
  // 2.2 如果不等于/main 则不需要登录 直接放行
  // 3. 如果访问的地址是/main 需要读取localStorage中token值
  // 3.1 有token放行

  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
