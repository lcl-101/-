<template>
    <div>
        <li>
            <slot name="pre-icon" :value="value"></slot>
            <span class="red" v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through;">{{title}}</span>
            <button v-show="!del" @click="handleClick">删除</button>
            <slot name="next-icon"></slot>
        </li>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false
        }
    },
    data: function(){
        return{
            value: Math.random()
        }
    },
    methods: {
        handleClick: function(){
            console.log("点击的删除按钮");
            this.$emit("delete",this.title);
        }
    }
}
</script>
<style scoped>
.red {
    color: red;
}
</style>