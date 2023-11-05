<script setup>
  import { RouterView } from 'vue-router'
  import navVue from './components/nav.vue';
</script>

<template>
  <div>
    <header>
      <navVue />  
    </header>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
