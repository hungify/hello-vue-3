import { reactive, toRefs } from 'vue';
import type { Store } from '~/interfaces/store';
import authStore from './auth';
import todosStore from './todos';

const errorStore = reactive({
  error: {
    message: '',
  },
});

const globalStore: Store = reactive({
  ...toRefs(errorStore),
  ...toRefs(authStore),
  ...toRefs(todosStore),
});

const useGlobalStore = () => globalStore;

export default useGlobalStore;
