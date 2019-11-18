import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/iview/home')
const Recommed = () => import('@/iview/recommed')
const Login = () => import('@/iview/login')
const Page1 = () => import('@/pages/page1')
const Page2 = () => import('@/pages/page2')
Vue.use(Router)
export default new Router({
  mode: 'history',  
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        requireAuto:true
      }
    },
    {
      path: '/recommed',
      name: Recommed,
      component: Recommed,
      meta:{
        requireAuto:true
      },
      children: [{
          path: '/recommed/page1',
          // 单个router-view用：component
          component: Page1
        },
        {
          path: '/recommed/page2',
          // 单个router-view用：component
          component: Page2
        }
      ]

  },
  {
    path:'/login',
    name:Login,
    component:Login
  }
]
})
