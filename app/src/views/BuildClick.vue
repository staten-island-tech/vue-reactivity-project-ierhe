<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds">{{ guds.nameofguds }}</TwoBox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';
const arrrayofguds = ref([
  {nameofguds: 'ApplePine', price:1},
  {nameofguds: 'RangeOr', price:2},
  {nameofguds: 'OniPepper', price:3},
  {nameofguds: 'seChee', price:1},
  {nameofguds: 'pleAp', price:2}
])

</script>

<style scoped>
div{
  display:flex;
  flex-direction: row;

}
</style>