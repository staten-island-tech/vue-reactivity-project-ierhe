<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds">{{ guds.nameofguds }}</TwoBox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';
const arrrayofguds = ref([
  {nameofguds: 'ApplePine'},
  {nameofguds: 'RangeOr'},
  {nameofguds: 'onipeppers'},
  {nameofguds: 'sechee'},
  {nameofguds: 'pleap'}
])

</script>

<style scoped>

</style>