<template>
  <div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>
    <PropsAndData :name="name" :info="info" :list="list" />
    <p>Reversed message1: "{{reversendMessage}}"</p>
    <p>Reversed message2: "{{reversendMessage2()}}"</p>
    <input type="text" v-model="message">
    <button @click="() => $forceUpdate()">forceUpdate</button>

    <Clock v-if="!destoryClock"/>
    <button @click="destoryClock = !destoryClock">{{destoryClock ? "加载时钟":"销毁时钟"}}</button>

    <TempVar :var1="`hello ${name}`" :var2="destoryClock ? 'hello vue':'hello world'">
      <template v-slot="{var1, var2}">
          {{var1}}
          {{var2}}
      </template>
    </TempVar>

    <Directives></Directives>

    <CustomerDirectives></CustomerDirectives>

    <ChildrenA></ChildrenA>

    <AnchoredHeading1 :level="1">hello world</AnchoredHeading1>
    <AnchoredHeading2 :level="2">hello world</AnchoredHeading2>
    <VNode :vnodes="getAnchoredHeading(4)"></VNode>
  </div>
</template>

<script>

import PropsAndData from "./components/PropsAndData";

import Clock from "./components/Clock";

import TempVar from "./components/TempVar";

import Directives from "./components/Directives";

import CustomerDirectives from "./components/CustomerDirectives";

import ChildrenA from "./components/ChildredA";

import AnchoredHeading1 from "./components/AnchoredHeading1.js";
import AnchoredHeading2 from "./components/AnchoredHeading2";

export default {
  name: 'App',
  components: {
    PropsAndData,
    Clock,
    TempVar,
    Directives,
    CustomerDirectives,
    ChildrenA,
    AnchoredHeading1,
    AnchoredHeading2,
    VNode: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes 
    }
  },
  provide() {
    return {
      theme: {
        color: this.color,
        setChildrenRef: (name, ref) => {
          this[name] = ref;
        },
        getChildrenRef: name => {
          return this[name];
        },
        getRef: ()=> {
          return this;
        }
      }
    }
  },
  data() {
    return {
      name: this.name,
      info: {
        number: undefined
      },
      // info: {
      //   number: undefined
      // },
      list: [],
      message: "hellow vue",
      destoryClock: false,
      color: "blue"
    }
  },
  methods: {
    handleNameChange() {
      this.name = "vue" + Date.now();
      console.log("this.name 发生了变化，但是并没有触发子组件更新", this.name);
    },
    handleInfoChange() {
      this.info.number = 1;
      // this.$set(this.info, 'number', 1)
      console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log("this.list 并没有发生变化，但是触发了子组件更新", this.list);
    },
    reversendMessage2() {
      console.log("执行reversendMessage2");
      return this.message.split("").reverse().join("");
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>hello world</Tag>;
    }
  },
  computed: {
    reversendMessage: function(){
      console.log("执行reversendMessage");
      return this.message.split("").reverse().join("");
    }
  }
}
</script>
