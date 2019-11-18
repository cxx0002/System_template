// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import './request/http.js'
import store from './store'
import 'view-design/dist/styles/iview.css'
import './assets/style/base.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
Vue.config.productionTip = false
Vue.component('body-header',Header)
Vue.component('body-footer',Footer)
Vue.prototype.HOME = '/api'
Vue.use(ViewUI);
//路由拦截
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuto){ //判断此路由是否需要登录

console.log(store.state)
    if(store.state.token){ //判断是否存在登录凭证
      next();
    } else {
      next({
        path:'/login',
        query:{
          redirect:to.fullPath 
        }
      })
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

