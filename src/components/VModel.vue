<script setup lang="ts">
import type { Directive } from 'vue';
import { ref } from 'vue';

const value = ref('Hello Vue.js');

function onInput(event: Event) {
  value.value = (event.target as HTMLInputElement).value;
}

const VOhModel: Directive<HTMLInputElement, string> = {
  mounted(element, binding) {
    const input = element;
    input.value = binding.value;
    input.addEventListener('input', onInput);
  },
  unmounted(element) {
    element.removeEventListener('input', onInput);
  }
};
</script>

<template>
  <input v-oh-model="value" type="text" />

  {{ value }}
</template>
