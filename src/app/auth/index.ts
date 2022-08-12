import { reactive } from 'vue';
import { useLocalStorage } from '~/composables/useLocalStorage';
import type { AuthState, AuthStore } from '~/interfaces/auth';
import authActions from './actions';

const { storage } = useLocalStorage('auth', {}, true);

const initialAuth: AuthState = {
  ...storage,
  isAuthenticated: !!storage?.accessToken,
};

const authStore: AuthStore = reactive({
  auth: {
    ...initialAuth,
    ...authActions,
  },
});

export default authStore;
