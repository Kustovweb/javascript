<script setup>
import PageMain from '@/pages/PageMain.vue'
import PageBookmarks from '@/pages/PageBookmarks.vue';
import SearchNavBar from '@/components/SearchNavBar.vue'
</script>

<template>
  <div class="sticky top-0 bg-white py-1 dark:border-gray-600">
    <h1 class="font-bold text-2xl text-center mt-6">Поиск вакансий по России с автоматическим определением
      местоположения
    </h1>
    <div class="container mx-auto flex justify-center my-4">
      <router-link to="/PageMain" class="self-start border border-slate-300 hover:border-indigo-300 py-2 px-6
  rounded-full ml-8">Поиск</router-link>
      <router-link to="/PageBookmarks" class="self-start border border-slate-300 hover:border-indigo-300 py-2 px-6
  rounded-full ml-8">Закладки</router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
