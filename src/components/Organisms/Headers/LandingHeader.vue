<script setup lang="ts">
import { toggleDark } from '~/composables/dark'
// const externalRouteTo = (route = '') => {
//   window.open(route, '_blank')
// }
</script>

<template>
  <div class="fixed top-0 z-10 w-full flex p-3 justify-between  bg-dark text-light">
    <div>
      <!-- todo: change logo bg color(transparent) -->
      <img src="/re2br_logo.png" alt="ReFi Brasil" class="w-28">
    </div>
    <div class="flex items-center space-x-3 pr-7">
      <MenuItem label="Home" route-to="/" />
      <MenuItem label="Events" route-to="/events" />

      <MenuItem label="Re² + Borderless" route-to="/borderless" />

      <Button class="icon-btn pl-7" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </Button>
      <!-- todo: lang selector -->
      <!-- <Button class="icon-btn">
        <div i="carbon-menu" />
      </Button> -->
    </div>
  </div>
</template>

