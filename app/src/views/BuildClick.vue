<template>
  <div class="container">
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds" :img="guds.img">
      <button @click="saladadding(guds)">Just click it at this point</button>
      <section id="pictures">
        <img :src="guds.img">
      </section>
      
    </TwoBox>
    
  </div>
  <section id="saladbowl"> 
    <div class="bowl-container">
      <img class="bowl" src="/images/glass.jpg">
      <img
        v-for="(ingri, index) in ingridientsList"
        :key="index"
        :src="ingri.img"
        class="THElayer"
        :style="{zIndex:index+1}"
      
        >

    </div>

    <ul id="pictures">
      <img src="/images/pleAp.png">
    </ul>
  </section>
  <h2>The total of the guds bowl is {{ totalmoney }}$</h2>
  <div class="listguds">
    <h2></h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';

function saladadding(ingridients){
  totalmoney.value += ingridients.price
  console.log(ingridients.price);
  ingridientsList.value.push(ingridients)
}

const arrrayofguds = [
  {nameofguds: 'ApplePine', price:1, img:'/images/ApplePine.png'},
  {nameofguds: 'RangeOr', price:2, img:'/images/RangeOr.png'},
  {nameofguds: 'OniPepper', price:3, img:'/images/OniPepper.png'},
  {nameofguds: 'seChee', price:1, img:'/images/seChee.png'},
  {nameofguds: 'pleAp', price:2, img:'/images/pleAp.png'},
  {nameofguds: 'Arpe', price:3, img:'/images/Arpe.png'},
  {nameofguds: 'Totoma', price:3, img:'/images/Totoma.png'},
]

const ingridientsList = ref([])

const totalmoney = ref(0)

</script>

<style scoped>

.container {
  display:flex;
  flex-wrap: wrap;

}
.container > * {
  width: 15%;
}
.saladbowl {
  display: flex;
  align-items: center;
}
.pictures {
  display: flex;
  align-items: center;
  
}
.listguds {
  align-items: center;
  justify-content: space-around;
}
.bowl-container{
  position: relative;
  width: 300px;

}
.THElayer{
  position: absolute;
  width: 100%;

}
</style>