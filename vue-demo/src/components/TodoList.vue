<template>
    <div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            list: [
                {
                    title: "课程1",
                    del: false
                },{
                    title: "课程2",
                    del: true
                }
            ],
        }
    }
}
</script>