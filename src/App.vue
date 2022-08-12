<script setup lang="ts">
import { computed } from 'vue';
import LayoutVertical from './layouts/LayoutVertical.vue';
import Grand from './components/Grand.vue';
import Form from './components/Form.vue';

const layout = computed(() => {
  return LayoutVertical;
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
  <Grand />
  <Form />
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
