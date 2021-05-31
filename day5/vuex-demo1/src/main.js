import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from "./min_vuex"
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increat (state){
      state.count++
    }
  },
  actions: {
    increment ({commit}){
      setTimeout( ()=> {
        commit('increat')
      },2000)
    }
  },
  getters: {
    doubleCount (state){
      return state.count * 2
    }
  }
})

Vue.prototype.$store = store
console.log(store)
new Vue({
  // store,
  render: h => h(App),
}).$mount('#app')
