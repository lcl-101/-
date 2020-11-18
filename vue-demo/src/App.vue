<template>
  <div id="app">
    <input v-model="message" type="text">
    {{message}} {{message + message}}
    <input :value="message" @input="handleChange" type="text">
    <div :id="message"></div>
    <todo-list>
            <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :title="item.title" :del="item.del">
                <!-- vue2.6之后语法 -->
                <template v-slot:pre-icon="{value}">
                    <span>前置图标{{value}}</span>
                </template>
                <!-- vue2.5语法 -->
                <span slot="next-icon">后置图标</span>
            </todo-item>
        </todo-list>
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      message: "hello world",
      list: [
          {
              title: "课程1",
              del: false
          },{
              title: "课程2",
              del: true
          }
      ],
      item: {
          title: "课程1",
          del: false
      }
    }
  },
  methods: {
      handleChange (e){
        this.message = e.target.value;
      },
      handleDelete(val) {
          console.log('handleDelete:' + val);
      }
  }
}
</script>
