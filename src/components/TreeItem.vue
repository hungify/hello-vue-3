<script setup lang="ts">
interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}

defineProps<{ data: TreeData[] }>();
</script>

<template>
  <ul v-for="item in data" :key="item.key">
    <li>{{ item?.title }}</li>
    <template v-if="item.children">
      <TreeItem :data="item.children" />
    </template>
  </ul>
</template>
