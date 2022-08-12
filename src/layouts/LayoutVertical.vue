<script lang="ts" setup>
import BaseLayout from './BaseLayout.vue';
</script>

<template>
  <BaseLayout>
    <template #header="{ header }">
      <h5>This is my Header {{ header }}</h5>
    </template>

    <template #default>
      <router-view #="{ Component, route }">
        <Transition name="scale" mode="out-in">
          <div :key="route.name || new Date().getTime()">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
    </template>

    <template #footer="{ footer }">
      <h5>This is my Footer {{ footer }}</h5>
    </template>
  </BaseLayout>
</template>
