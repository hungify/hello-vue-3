<script setup lang="ts">
import { ref, type Ref } from 'vue';

function useToggle(init = false): [Ref<boolean>, () => void] {
  const state = ref(init);
  const toggle = () => (state.value = !state.value);

  return [state, toggle];
}

const [state, toggle] = useToggle(false);
</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <button @click="toggle">Toggle state</button>
</template>
