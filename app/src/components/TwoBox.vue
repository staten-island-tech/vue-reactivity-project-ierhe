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
    width: 1000px;
    border: 3px solid cyan;
    box-shadow: 5px 5px 5px rgb(0, 168, 190);
    margin: 50px;
    border-radius: 5%;
}
</style>