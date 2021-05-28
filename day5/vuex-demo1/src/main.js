import Vue from 'vue'
import Vuex from 'vuex'
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
    increment ({state}){
      setTimeout( ()=> {
        state.count++
      },2000)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
