<template>
  <div id="app">
    <input type="text" v-model="message">
    <input type="text" :value="message" @input="handelChange">
    {{message}} {{message + message}}
    <div :id="message"></div>
    <todo-list>
        <todo-item v-for="item in list" @delete="deletehandel" :key="item.name" :name="item.name" :del="item.del">
            <template v-slot:pre-icon="{value}">
                <span>前置图标{{value}}</span>
            </template>
            <template v-slot:suf-icon>
                <!-- <span>后置图标</span> -->
            </template>
            <!-- vue2.5
            <span slot="pre-icon">前置图标</span>
            <span slot="suf-icon">后置图标</span> -->
        </todo-item>
    </todo-list>
    <ReverMessage></ReverMessage>
    <WatchDemo></WatchDemo>
    <clock></clock>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'
import ReverMessage from './views/1.5'
import WatchDemo from './views/watch'
import clock from "./views/clock"

export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList,
    ReverMessage,
    WatchDemo,
    clock
  },
  data (){
    return {
      message: 'hello world',
      list: [
            {
                name: '课程',
                del: false
            },
            {
                name: '课程2',
                del: true
            }
        ]
    }
  },
  methods: {
    handelChange(e){
      this.message = e.target.value
    },
    deletehandel(val){
        console.log('deletehandel:',val)
    }
  }
}
</script>