<template>
    <div>
        {{log('render')}}
        {{now}}
        <button @click="start = !start">{{start? '停止': '开始'}}</button>
    </div>
</template>
<script>
import moment from "moment"
export default {
    data() {
        console.log("data");
        this.moment = moment;
        this.log = window.console.log;
        return {
            now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            start: false
        }
    },
    name: 'clock',
    watch: {
        start() {
            this.startClock()
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        clearInterval(this.cloclInterval)
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")
    },
    methods: {
        startClock (){
            clearInterval(this.cloclInterval)
            if(this.start){
                this.cloclInterval = setInterval(() => {
                    this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                },1000)
            }
        }
    },
}
</script>