<script setup lang="ts">
import useGlobalStore from '~/app/store';

const { auth } = useGlobalStore();
</script>

<template>
  <h3>Only Admin access this page</h3>
  <h5>Your role is: {{ auth.role }}</h5>
</template>
