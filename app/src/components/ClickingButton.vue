<template>
    <div>
        <button @click="cartadding">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
import totalmoney from '@/components/ClickingButton.vue';

function cartadding() {
  totalmoney += pirces.price
  return totalmoney
}

</script>

<style scoped>

</style>