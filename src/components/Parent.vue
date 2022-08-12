<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: true
  },
  activeId: {
    type: Boolean
  }
});
</script>

<template>
  <ul className="bg-white">
    <!-- <Child :getFromParent="abc" /> -->

    <div>fdf</div>
    <h3>{{ msg }}</h3>
    <h3>{{ activeId }}</h3>
  </ul>
</template>
