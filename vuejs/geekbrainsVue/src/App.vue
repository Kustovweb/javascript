<script setup>
import LessonComp from './components/LessonComp.vue';
</script>

<template>
  <div class="wrapper">
    <lesson-comp></lesson-comp>
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
