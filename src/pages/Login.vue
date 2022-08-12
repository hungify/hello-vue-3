<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import useGlobalStore from '~/app/store';

const user = ref('');
const { error, auth } = useGlobalStore();
const router = useRouter();

watch(auth, (auth) => {
  if (auth.isAuthenticated) {
    router.push('/');
  }
});

const handleLogin = () => {
  auth.fetchLogin({
    email: user.value
  });
  user.value = '';
};

const handleLogout = () => {
  auth.fetchLogout();
  router.push('/login');
};
</script>

<template>
  <div v-if="auth.isAuthenticated">
    <h1>You are logged in as role {{ auth.role }}</h1>
    <button @click="handleLogout">Logout</button>
  </div>
  <div v-else>
    <h3 v-show="error.message">{{ error.message }}</h3>
    <div>type admin to login as admin</div>
    <div>type editor to login as editor</div>
    <div>type subscriber to login as subscriber</div>
    <input v-model="user" type="text" />

    <button @click="handleLogin">Login</button>
  </div>
</template>

<style scoped>
h3 {
  color: red;
}
</style>
