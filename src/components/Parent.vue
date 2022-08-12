<script setup lang="ts">
import { onErrorCaptured, toRefs } from 'vue';

const props = defineProps({
  abc: {
    type: String,
    required: true,
    default: '',
  },
  f: {
    type: Object,
    required: true,
  },
});

const { f } = toRefs(props);

const click = () => {
  f.value.a.b.c += 2;
};
</script>

<template>
  <ul className="bg-white">
    <!-- <Child :getFromParent="abc" /> -->
    <h1>{{ abc }}</h1>
    <h3>{{ f }}</h3>
    <button @click="click">Change</button>
  </ul>
</template>
