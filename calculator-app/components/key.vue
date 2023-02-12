<script setup>
defineProps(["content"])

</script>

<template>
    <div @click="$emit('keyClicked', content)">
        {{content}}
    </div>
</template>

<style scoped>
    div {
        display: flex;
        background:lightgray;
        height: 30px;
        width: 30px;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-color: black;
        border-style: inset;
    }
    div:hover {
        background: darkgray;
        
        cursor: pointer;
    }

</style>