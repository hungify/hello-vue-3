<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { ref } from 'vue';

const headerContent = ref('header from base layout');
const footerContent = ref('footer from base layout');
</script>

<template>
  <TheHeader>
    <slot name="header" :header="headerContent" />
  </TheHeader>
  <main>
    <slot />
  </main>

  <TheFooter>
    <slot name="footer" :footer="footerContent" />
  </TheFooter>
</template>
