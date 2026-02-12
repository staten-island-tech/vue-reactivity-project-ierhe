<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" 
    :key="guds.nameofguds" 
    :guds="guds">{{ guds.nameofguds }}
    <button @click="cartadding">
      <slot>Add to the sideo</slot>
    </button>
    </TwoBox>
  </div>
  <h2></h2>
  <h2>The total of the guds is {{ totalmoney }}</h2>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';
const arrrayofguds = ([
  {nameofguds: 'ApplePine', price:1},
  {nameofguds: 'RangeOr', price:2},
  {nameofguds: 'OniPepper', price:3},
  {nameofguds: 'seChee', price:1},
  {nameofguds: 'pleAp', price:2},
  {nameofguds: 'Arpe', price:3}
])
let totalmoney = ref(0)

function cartadding(item) {
    totalmoney = total + item.price
    return totalmoney
}

</script>

<style scoped>
div{
  display:flex;
  flex-direction: row;

}

.pleAP{
  z-index: 1;
}
</style>