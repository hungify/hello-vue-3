<script lang="ts" setup>
import { ref } from 'vue';

interface TodoItemProps {
  getFromParent: (name: string, evt: Event) => void;
}

withDefaults(defineProps<TodoItemProps>(), {});
const abc = ref('abc');
</script>

<template>
  <li
    class="px-8 py-4 outline-1 outline-teal-500 text-2xl border-t-2 border-gray-300"
    @contextmenu="(e) => e.preventDefault()"
    @click="getFromParent('zhy', $event)"
  >
    123
  </li>
</template>
