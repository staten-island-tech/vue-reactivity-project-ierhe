<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds">{{ guds.nameofguds }}</TwoBox>
  </div>
  <h2>The total of the guds is {{ totalmoney }}</h2>
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
const totalmoney = 0

</script>

<style scoped>
div{
  display:flex;
  flex-direction: row;

}
</style>