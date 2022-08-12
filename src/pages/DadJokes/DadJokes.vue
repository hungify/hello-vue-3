<script lang="ts" setup>
import { ref } from 'vue';

const joke = ref('');
const config = {
  headers: {
    Accept: 'application/json',
  },
};

const fetchJoke = async () => {
  const data = await fetch('https://icanhazdadjoke.com', config).then((r) => r.json());
  joke.value = data.joke;
};

fetchJoke();
</script>

<template>
  <div class="joke-wrapper">
    <div class="joke-inner">
      <h3>Don't laugh challenge</h3>

      <div class="joke-view">
        {{ joke }}
      </div>

      <button class="joke-btn" @click="fetchJoke()">
        <span> Get another joke </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.joke {
  &-wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #686de0;
    padding: 20px;
    h3 {
      margin: 0;
      opacity: 0.5;
      letter-spacing: 2px;
    }
  }
  &-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 50px 20px;
    max-width: 800px;
    width: 100%;
    border-radius: 10px;
  }
  &-view {
    text-align: center;
    margin: 50px auto;
    letter-spacing: 1px;
    line-height: 40px;
    font-size: 30px;
    max-width: 600px;
    font-weight: 500;
  }
  &-btn {
    background-color: #9f68e0;
    border: none;
    outline: none;
    padding: 14px 40px;
    cursor: pointer;
    display: inline-block;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:active {
      transform: scale(0.98);
    }
    span {
      color: #fff;
    }
  }
}
</style>
