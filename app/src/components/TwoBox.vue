<template>
    <div>
        <h2>{{ guds.nameofguds }}</h2>
        <h2>{{ guds.price }}</h2>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    guds:{
        type:Object,
        required: true
    },
    methods: {
        increment() {
        this.count++
    }  
}
})



</script>

<style scoped>
div{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 600px;
    width: 600px;
    border: 3px solid cyan;
    margin: 100px;
}
</style>