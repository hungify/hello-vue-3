<script setup lang="ts">
import { ref } from 'vue';
import Parent from './Parent.vue';

const arr = ref([
  { id: 0, msg: 'hello' },
  { id: 1, msg: 'world' },
  { id: 2, msg: 'bye' },
  { id: 3, msg: 'abc' }
]);

const activeId = ref(0);

const click = () => (activeId.value += 1);
</script>

<template>
  <ul className="bg-white">
    <h1>{{ arr }}</h1>
    <br />
    <button @click="click">Next</button>
    <Parent
      v-for="item in arr"
      :key="item.msg"
      :active-id="activeId === item.id"
      :msg="item.msg"
    />
  </ul>
</template>
