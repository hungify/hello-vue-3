<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TreeItem from './TreeItem.vue';
export interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}

const treeData: Ref<TreeData[]> = ref([
  {
    key: '1',
    title: 'Parent 1',
    children: [
      {
        key: '1-1',
        title: 'child 1',
        children: []
      },
      {
        key: '1-2',
        title: 'child 2',
        children: [
          {
            key: '1-2-1',
            title: 'grandchild 1',
            children: []
          },
          {
            key: '1-2-2',
            title: 'grandchild 2',
            children: []
          }
        ]
      }
    ]
  },
  {
    key: '2',
    title: 'Parent 2',
    children: [
      {
        key: '2-1',
        title: 'child 1',
        children: [
          {
            key: '2-1-1',
            title: 'grandchild 1',
            children: []
          },
          {
            key: '2-1-2',
            title: 'grandchild 2',
            children: []
          }
        ]
      },
      {
        key: '2-2',
        title: 'child 2',
        children: []
      }
    ]
  }
]);
</script>

<template>
  <TreeItem :data="treeData" />
</template>
