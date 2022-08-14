import { reactive } from 'vue';
import { useLocalStorage } from '~/composables/useLocalStorage';
import { ROLES } from '~/configs/auth';
import type { AuthState, AuthStore } from '~/interfaces/auth';
import authActions from './actions';

export const initialAuth: Omit<AuthState, 'isAuthenticated'> = {
  accessToken: '',
  role: ROLES.Guest
};

const authStorage = useLocalStorage('auth', initialAuth);
const authState: AuthState = {
  ...authStorage.value,
  isAuthenticated: !!authStorage.value?.accessToken
};

const authStore: AuthStore = reactive({
  auth: {
    ...authState,
    ...authActions
  }
});

export default authStore;
