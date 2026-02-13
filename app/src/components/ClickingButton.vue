<template>
    <div>
        <button @click="cartadding">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
function cartadding() {
  totalmoney += nameofguds.price
  return totalmoney
}
</script>

<style scoped>

</style>