import { reactive } from 'vue';
import type { Store } from '~/interfaces/store';
import authStore from './auth';
import todosStore from './todos';

const errorStore = reactive({
  error: {
    message: ''
  }
});

const useGlobalStore = () => {
  const globalStore: Store = reactive({
    ...errorStore,
    ...authStore,
    ...todosStore
  });
  return globalStore;
};

export default useGlobalStore;
