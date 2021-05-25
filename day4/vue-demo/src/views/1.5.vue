<template>
    <div>
        <p>reverserMessage: {{reverserMessage}}</p>
        <p>reverserMessage2: {{reverserMessage2()}}</p>
        <p></p>
                              <!-- vue强制跟新 -->
        <button @click="() => $forceUpdate()">forceUpdate</button>
        <br>
        <input type="text" v-model="message">
    </div>
</template>
<script>
export default {
    name: 'reverMessage',
    data (){
        return {
            message: 'hello'
        }
    },
    computed: {
        reverserMessage (){
            console.log('执行reverserMessage')
            return this.message.split('').reverse().join('')
        },
        now (){
            return Date.now()
        }
    },
    methods: {
        reverserMessage2 (){
            console.log('执行reverserMessage2')
            return this.message.split('').reverse().join('')
        },
    },
}
</script>