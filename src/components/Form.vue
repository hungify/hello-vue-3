<script setup lang="ts">
import { ref } from 'vue';
import VInput from './VInput.vue';
const value = ref('');
</script>

<template>
  <VInput v-model.capitalize="value" type="text" />
  {{ value }}
</template>
