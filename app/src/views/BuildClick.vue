<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds" :img="guds.img">{{ guds.nameofguds }}
      <button @click="saladadding(guds)">Just click it at this point</button>
      
      
      
    </TwoBox>
    
  </div>
<!--   <section id="ingiridents list">
    <img src="/images/ApplePine.img">
    <img src="/images/RangeOr.img">
    <img src="/images/OniPepper.img">
    <img src="/images/seChess.img">
    <img src="/images/pleAp.img">
    <img src="/images/Totoma.img">

  </section> -->
  <section id="saladbowl"> 
    <img src="/images/glass.jpg">
  </section>
  <h2>The total of the guds is {{ totalmoney }}$</h2>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';

function saladadding(ingridients){
  totalmoney.value += ingridients.price
  console.log(ingridients.price);

  
}

const arrrayofguds = [
  {nameofguds: 'ApplePine', price:1, img:'/images/ApplePine.img'},
  {nameofguds: 'RangeOr', price:2, img:'/images/RangeOr.img'},
  {nameofguds: 'OniPepper', price:3, img:'/images/OniPepper.img'},
  {nameofguds: 'seChee', price:1, img:'/images/seChess.img'},
  {nameofguds: 'pleAp', price:2, img:'/images/pleAp.img'},
  {nameofguds: 'Arpe', price:3, img:'/images/Arpe.img'},
  {nameofguds: 'Totoma', price:3, img:'/images/Totoma.img'},
]


const totalmoney = ref(0)

</script>

<style scoped>

div{
  display:flex;
  flex-direction: row;

}
</style>