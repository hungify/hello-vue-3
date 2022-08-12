import { abilitiesPlugin, Can } from '@casl/vue';
import { computed, createApp } from 'vue';
import routes from '~/routes';
import App from './App.vue';
import useGlobalStore from './app/store';
import buildAbilityForRole from './configs/ability';
import './style.css';

const { auth } = useGlobalStore();

const appAbility = computed(() => buildAbilityForRole(auth.role));

createApp(App)
  .use(abilitiesPlugin, appAbility.value, {
    useGlobalProperties: true
  })
  .component(Can.name, Can)
  .use(routes)
  .mount('#app');
