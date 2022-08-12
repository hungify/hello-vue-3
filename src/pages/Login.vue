<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useGlobalStore from '~/app/store';
const router = useRouter();

const user = ref('');
const {
  error,
  auth: { fetchLogin },
} = useGlobalStore();

const handleLogin = () => {
  fetchLogin({ username: user.value }, () => {
    router.push({
      name: 'profile',
      params: {
        id: '1',
      },
      state: {
        id: '2',
      },
    });
  });

  user.value = '';
};
</script>

<template>
  <h3 v-show="error.message">{{ error.message }}</h3>
  <input v-model="user" type="text" />

  <button @click="handleLogin">Login</button>
</template>

<style scoped>
h3 {
  color: red;
}
</style>
