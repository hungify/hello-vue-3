<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import Parent from './Parent.vue';

const abc = ref('abc');
const f = reactive({
  a: {
    b: {
      c: 1,
    },
  },
});

console.log('hel');


</script>

<template>
  <ul className="bg-white">
    <h1>{{ f }}</h1>
    <br />
    <Parent :abc="abc" :f="f" />
  </ul>
</template>
