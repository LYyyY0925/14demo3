<template>
    <div class="jianjie">
        <span>你的性别是：{{this.$store.state.radio}}</span><p></p>
        <span>你的爱好是：{{this.$store.state.checkbox}}</span><p></p>
        <span>个人简介:{{this.$store.state.zwjs}}</span><p></p>
    </div>
</template>

<script>
    export default {
        name: "jianjie",
    }
</script>

<style scoped>

</style>