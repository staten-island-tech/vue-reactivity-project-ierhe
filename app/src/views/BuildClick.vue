<template>
  <div>
    <TwoBox v-for="guds in arrrayofguds" 
    :key="guds.nameofguds"
    :guds="guds">{{ guds.nameofguds }}
    </TwoBox>
    <TwoBox v-for="pictures in arrrayofguds" 
    :key="pictures.img"
    :pictures="pictures">{{ pictures.img }}
    </TwoBox>
    <ClickingButton v-for="number in prices"
    :key="number.price"
    :number="number">{{ number.price }}
    </ClickingButton>
    <button @click="ClickingButton">
      <slot>Total enter</slot>
    </button>
    
  </div>
  <h2>The total of the guds is {{ totalmoney }}</h2>
</template>

<script setup>
import { ref } from 'vue'
import TwoBox from '@/components/TwoBox.vue';
import ClickingButton from '@/components/ClickingButton.vue';

const arrrayofguds = [
  {nameofguds: 'ApplePine', price:1, img:'/ApplePine.png'},
  {nameofguds: 'RangeOr', price:2, img:'/RangeOr.png'},
  {nameofguds: 'OniPepper', price:3, img:'/OniPepper.png'},
  {nameofguds: 'seChee', price:1, img:'/seChess.png'},
  {nameofguds: 'pleAp', price:2, img:'/pleAp.png'},
  {nameofguds: 'Arpe', price:3, img:'/Arpe.png'},
  {nameofguds: 'Totoma', price:3, img:'/Totoma.png'},
]

const prices = [
  {price:1},
  {price:2},
  {price:3},
  {price:1},
  {price:2},
  {price:3},
  {price:3},
]

let totalmoney = ref(0)

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