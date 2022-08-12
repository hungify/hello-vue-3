<script setup lang="ts">
import { computed } from 'vue';
import LayoutVertical from './layouts/LayoutVertical.vue';

const layout = computed(() => {
  return LayoutVertical;
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
