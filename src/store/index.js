// 引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 这里需要use一下,固定写法,记住即可
Vue.use(Vuex)

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
  // 类似 vue 的 data
  state: {
    name: 'oldName'
  },
  // 类似 vue 的 computed -----------------以下5行为新增
  // getter 不止单单起到封装的作用,它还跟vue的computed属性一样,会缓存结果数据, 只有当依赖改变的时候,才要重新计算.
  getters:{
    getReverseName: state => {
        return state.name.split('').reverse().join('')
    }
  },
  // 类似 vue 里的 mothods(同步方法)
  mutations: {
    updateName (state) {
    //   state.name ++
        state.name = state.name+'a'
    }
  },
  // 类似 vue 里的 mothods(异步方法) -------- 以下7行为新增
  actions: {
    updateNameAsync ({ commit }) {
      setTimeout(() => {
        commit('updateName')
      }, 1000)
    }
  }
})