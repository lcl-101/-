<template>
    <div>
        <!-- 指令学习 -->
        <!-- 语法糖,标志位 -->
        <h2>v-text</h2>
        <div v-text="'hello vue'">hello word</div>
        <h2>v-html</h2>
        <div v-html="'<span style=&quot;color:red&quot;>hello vue</span>'">hello word</div>
        <h2>v-show</h2>
        <div v-show="show">hello vue</div>
        <button @click="show = !show">change show</button>
        <h2>v-if v-else-if v-else</h2>
        <div v-if="number === 1">hellow vue {{number}}</div>
        <div v-else-if="number === 2">hellow world {{number}}</div>
        <div v-else>hellow geektime {{number}}</div>
        <h2>v-for v-bind</h2>
        <div v-for="num in [1,2,3]" v-bind:key="num">hello vue {{num}}</div>
        <h2>v-on</h2>
        <button v-on:click="number = number + 1">number++</button>
        <h2>v-mode</h2>
        <input type="text" v-model="message">
        <h2>v-pre</h2>
        <div v-pre>{{this will not be compiled}}</div>
        <h2>v-once</h2>
        <div v-once>{{number}}</div>
    </div>
</template>
<script>
export default {
    name: "Directives",
    data (){
        return {
            show: true,
            number: 1,
            message: "hellow"
        }
    }
}
</script>