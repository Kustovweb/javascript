<script setup>
import LessonComp from './components/LessonComp.vue';
import ProductDetails from './components/ProductDetails.vue'
</script>

<template>
  <div class="wrapper">
    <product-details></product-details>
  </div>
</template>

<style scoped>

.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>
