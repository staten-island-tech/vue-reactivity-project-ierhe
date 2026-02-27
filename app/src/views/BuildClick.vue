<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds">{{ guds.nameofguds }}
      <button @click="pizzaadding(guds)">Just click it at this point</button>
      
    </TwoBox>

  </div>
  <h2>The total of the guds is {{ totalmoney }}</h2>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';

function pizzaadding(ingridients){
  totalmoney + ingridients.price
  console.log(ingridients.price)
  return totalmoney
}

const arrrayofguds = [
  {nameofguds: 'ApplePine', price:1, img:'/ApplePine.png'},
  {nameofguds: 'RangeOr', price:2, img:'/RangeOr.png'},
  {nameofguds: 'OniPepper', price:3, img:'/OniPepper.png'},
  {nameofguds: 'seChee', price:1, img:'/seChess.png'},
  {nameofguds: 'pleAp', price:2, img:'/pleAp.png'},
  {nameofguds: 'Arpe', price:3, img:'/Arpe.png'},
  {nameofguds: 'Totoma', price:3, img:'/Totoma.png'},
]


let totalmoney = ref(0)

</script>

<style scoped>
div{
  display:flex;
  flex-direction: row;

}
</style>