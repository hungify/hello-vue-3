<script lang="ts" setup>
interface TodoItemProps {
  getFromParent: (name: string, evt: Event) => void;
}

withDefaults(defineProps<TodoItemProps>(), {});
</script>

<template>
  <li
    class="px-8 py-4 outline-1 outline-teal-500 text-2xl border-t-2 border-gray-300"
    @click="getFromParent('zhy', $event)"
    @contextmenu="(e) => e.preventDefault()"
  />
</template>
