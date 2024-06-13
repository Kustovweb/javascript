<script setup>
  import UserList from './components/UserList.vue'
</script>

<template>
  <div class="wrapper">
    <UserList />
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
