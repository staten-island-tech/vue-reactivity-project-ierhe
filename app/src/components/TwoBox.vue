<template>
    <div>
        <h2>{{ guds.nameofguds }}</h2>
        <h2>{{ guds.price }}</h2>
        <button @click="cartadding">add to the side</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    guds:{
        type:Object,
        required: true
    }
})

const total = ref(0)

function cartadding() {
    total + guds.price
    return total
}
</script>

<style scoped>
div{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 500px;
    width: 300px;
    border: 3px solid blue;
    margin: 100px;
}
</style>