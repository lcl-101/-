<template>
    <li>
        <slot name="pre-icon" :value="value"></slot>
        <span class="red" v-if="!del">{{name}}</span>
        <span v-else style="text-decoration: line-through;">{{name}}</span>
        <slot name="suf-icon">😃</slot>
        <button v-show="!del" @click="handelClick">删除</button>
    </li>
</template>
<script>
export default {
    props: {
        name: String,
        del: Boolean
    },
    data: function(){
        return {
            value: Math.random()
        }
    },
    methods: {
        handelClick (){
            this.$emit('delete', this.name);
        }
    }
}
</script>
<style scoped>
.red {
  color: red;
}
</style>