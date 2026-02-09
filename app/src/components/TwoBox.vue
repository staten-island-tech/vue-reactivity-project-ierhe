<template>
    <div>
        <h2>{{ guds.nameofguds }}</h2>
    </div>
</template>

<script setup>
defineProps({
    guds:{
        type:Object,
        required: true
    }
})
</script>

<style scoped>
div{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 400px;
    width: 200px;
    border: 3px solid blue;
}
</style>