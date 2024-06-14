<script setup>
import UserList from './components/UserList.vue'
import NewComp from './components/NewComp.vue'
import AddToCart from './components/AddToCart.vue'
</script>

<template>
  <div class="wrapper">
    <AddToCart />
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
