<template>
  <div id="app">
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increat')">count++</button>
    <button @click="$store.dispatch('increment')">count++</button>
    <br>
     <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  computed: {
    count (){
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
