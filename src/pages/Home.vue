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

  <router-link :to="{ name: 'admin' }"> Go to admin page </router-link>
  <br />
  <router-link :to="{ name: 'editor' }"> Go to editor page </router-link>
  <br />
  <router-link :to="{ name: 'subscriber' }">
    Go to subscriber page
  </router-link>
  <br />

  <router-link :to="{ name: 'profile' }"> Go to profile </router-link>
  <br />
  <router-view name="helper" />
</template>
