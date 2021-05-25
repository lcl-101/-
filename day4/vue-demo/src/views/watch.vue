<template>
    <div>
        {{$data}}
        <br/>
        <button @click="() => a+=1">a+1</button>
    </div>
</template>
<script>
export default {
    data (){
        return {
            a: 1,
            b: {c:2,d:3},
            e: {
                f: {
                    g: 4
                }
            },
            h: []
        }
    },
    watch: {
        a: function(val, newVal){
            this.b.c += 1;
            console.log("new: %s, old: %s", val, newVal)
        },
        "b.c": function(val, newVal){
            this.b.d += 1;
            console.log("new: %s, old: %s", val, newVal)
        },
        "b.d": function(val, newVal){
            this.e.f.g += 1;
            console.log("new: %s, old: %s", val, newVal)
        },
        "e": {
            handler: function(val, newVal){
                this.h.push('😃')
                console.log("new: %s, old: %s", val, newVal)
            },
            deep: true
        }
    },
    name: 'watchDemo',   
}
</script>