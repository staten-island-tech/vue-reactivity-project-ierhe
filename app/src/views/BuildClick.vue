<template>
  <div class="container">
    <TwoBox v-for="guds in arrrayofguds" :key="guds.nameofguds" :guds="guds">
      <button @click="saladadding(guds)">Just click it to add to the bowl</button>
      <section class="pictures">
        <img :src="guds.img">
      </section>
      
    </TwoBox>
    
  </div>
  <div>
    <section id="saladbowl"> 
      <div class="bowl-container">
        <img class="bowl" src="/images/glass.jpg">
        <img
          v-for="(ingri, index) in ingridientsList"
          :key="index"
          :src="ingri.img"
          class="foodlayer"
          :style="{zIndex:index+1}"
        
          >

      </div>

    </section>
  </div>

  <h2>The total of the guds bowl is {{ totalmoney }}$</h2>

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
div {
  
  background-image: 
    radial-gradient(transparent 45%)
    url("/images/bread.png");
  background-image: rgba(0, 0, 0, 0.068);
  align-items: center;

}




.container {
  display:flex;
  flex-wrap: wrap;


}
.container > * {
  width: 25%;
}
.saladbowl {
  display: flex;
  align-items: center;
}
.pictures {
  display: flex;
  align-items: center;

  
}
.bowl-container{
  position: relative;
  width: 600px;
  height: 600px;

}
.bowl {
  position: relative;
}
.foodlayer{
  position: absolute;
  top: 20%;
  padding-left: 24%;
  width: 50%;
  height: 50%;

}
.bowl {
  display: block;
  width: 100%;
}
</style>