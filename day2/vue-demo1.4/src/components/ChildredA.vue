<template>
    <div>
        <h3 :style="{color: theme1.color}">inject</h3>
    </div>
</template>
<script>
export default {
    name: "ChildrenA",
    inject: {
        theme1: {
            from: 'theme',
            default: () => ({})
        }
    }
}
</script>