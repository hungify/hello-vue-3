<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useGlobalStore from '~/app/store';
const { params } = useRoute();

const slug = ref(params?.slug || 'abc');
const router = useRouter();
const { auth } = useGlobalStore();

const handleLogout = () => {
  auth.fetchLogout();
  router.push('/');
};
</script>

<template>
  <div>This content from home page</div>
  <input v-model="slug" type="text" />
  <br />
  <router-link :to="{ name: 'projectId', params: { slug } }">
    Go to project {{ slug }}
  </router-link>

  <div v-if="auth.isAuthenticated">
    <br />
    <button @click="handleLogout">Logout</button>
  </div>

  <br />

  <router-link :to="{ name: 'profile' }"> Go to profile </router-link>
  <router-view name="helper" />
</template>
