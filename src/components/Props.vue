<script lang="ts" setup>
import type { PropType } from 'vue';

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'text' | 'default';
const props = defineProps({
  variant: {
    type: String as PropType<ButtonType>,
    default: 'default',
    validator: (value: string) => {
      return ['primary', 'ghost', 'dashed', 'text', 'default'].includes(value);
    }
  }
});
</script>

<template>
  <button :variant="props.variant">Button</button>
  <p>{{ props.variant }}</p>
</template>
