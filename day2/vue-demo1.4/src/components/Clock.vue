<template>
    <div>
        <!-- vue生命周期 -->
        {{ now }}
        <button @click="start = !start">{{ start? "停止":"开始" }}</button>
    </div>
</template>
<script>
export default {
    name: "Clock",
    data: function(){
        return {
            now: new Date(),
            start: false
        }
    },
    watch: {
        start() {
            this.startClock();
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
        clearInterval(this.clockInterval);
    },
    destroyed() {
        console.log("destroyed");
    },
    methods: {
        startClock() {
            clearInterval(this.clockInterval);
            if(this.start){
                this.clockInterval = setInterval(() => {
                    this.now = new Date()
                })
            }
        }
    }
}
</script>