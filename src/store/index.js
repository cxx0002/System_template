import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  token: localStorage.getItem('header'), //初始化token
};

const mutations = {
  //存储token方法
  //设置token等于外部传递进来的值
  setToken(state, token) {
    state.token = token;
  }
};

const getters = {
  //获取token方法
  //判断是否有token,如果没有重新赋值，返回给state的token
  getToken(state) {
    if (state.token) {
      state.token = localStorage.getItem('header')
    }
    return state.token
  },

};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
})

export default store