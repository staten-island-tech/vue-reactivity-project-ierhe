<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds" :img="guds.img">{{ guds.nameofguds }}
      <button @click="saladadding(guds)">Just click it at this point</button>
      
      
      
    </TwoBox>
    
  </div>
  <bowl> 
    <img src="/images/glass.jpg">
  </bowl>
  <h2>The total of the guds is {{ totalmoney }}$</h2>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';

function saladadding(ingridients){
  totalmoney.value += ingridients.price
  console.log(ingridients.price)
  
}

const arrrayofguds = [
  {nameofguds: 'ApplePine', price:1, img:'/images/ApplePine.png'},
  {nameofguds: 'RangeOr', price:2, img:'/images/RangeOr.png'},
  {nameofguds: 'OniPepper', price:3, img:'/images/OniPepper.png'},
  {nameofguds: 'seChee', price:1, img:'/images/seChess.png'},
  {nameofguds: 'pleAp', price:2, img:'/images/pleAp.png'},
  {nameofguds: 'Arpe', price:3, img:'/images/Arpe.png'},
  {nameofguds: 'Totoma', price:3, img:'/images/Totoma.png'},
]


const totalmoney = ref(0)

</script>

<style scoped>
div{
  display:flex;
  flex-direction: row;

}
</style>