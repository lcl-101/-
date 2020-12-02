<template>
    <div>
        <h3 :style="{color: theme1.color}">inject</h3>
        <div></div>
    </div>
</template>
<script>
export default {
    name: "ChildrenA",
    inject: {
        theme1: {
            from: 'theme',
            default: () => ({})
        },
        setChildrenRef: {
            default: () => {}
        }
    }
}
</script>