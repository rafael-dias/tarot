<script setup>
import Tarot from './components/Tarot.vue'

</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
    <!-- </div> -->
  <!-- </header> -->
  
  <main>
    <!-- <Tarot/> -->
    <router-view />
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
body{
  background-color: #181818;
}
</style>
