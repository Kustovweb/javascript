<script setup>
import HeaderComp from "./blocks/HeaderComp.vue"
import FooterComp from "./blocks/FooterComp.vue"
import PageBlogDetails from "./pages/PageBlogDetails.vue";
</script>

<template>
  <HeaderComp />
  <router-view></router-view>
  <FooterComp />
</template>

<style scoped lang="sass">


</style>
