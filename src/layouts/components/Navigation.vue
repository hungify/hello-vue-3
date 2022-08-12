<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const gotoHome = () => {
  router.push({
    name: 'home',
    params: {
      msg: 'he'
    }
  });
};
</script>
<template>
  <div class="not-needed">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div>Navigation vertical bar</div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link" @click="gotoHome">Home</button>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'dadJokes' }" class="nav-link"
              >Dad jokes</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'todoApp' }" class="nav-link"
              >Todo App</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view #="{ Component, route }">
      <Transition name="scale" mode="out-in">
        <div :key="route.name || new Date().getTime()">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
    <router-view name="helper" />
  </div>
</template>

<style scoped>
a.active {
  background: #bbb;
}
</style>
