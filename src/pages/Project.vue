<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import useGlobalStore from '~/app/store';

const { params } = useRoute();
const router = useRouter();
const { auth } = useGlobalStore();

const handleLogout = () => {
  auth.fetchLogout();
  router.push('/login');
};
</script>
<template>
  <h3>This page required auth</h3>
  <h5>Project id: {{ params }}</h5>
  <br />
  <button @click="handleLogout">Logout</button>
</template>
