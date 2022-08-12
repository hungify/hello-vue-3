<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  modelModifiers: { capitalize: () => Record<string, unknown> };
}>();
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', upperFirstWord(val));
  }
});

function upperFirstWord(str: string) {
  if (!props.modelModifiers.capitalize) return str;
  return str.replace(/\w/, (v) => v.toUpperCase());
}
</script>

<template>
  <input v-model="value" type="text" />
</template>
