<script setup lang="ts">
import useGlobalStore from '~/app/store';

const { auth } = useGlobalStore();
</script>

<template>
  <h1>Unauthorized</h1>
  <h2>Your role is: {{ auth.role }}</h2>
  <h2>You are not authorized to access this page</h2>
</template>
