<template>
  <div id="app">
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment', 2)">count+2</button>
    <button @click="$store.dispatch('increment')">count++</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>
