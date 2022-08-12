import { useLocalStorage } from '~/composables/useLocalStorage';
import { ROLES } from '~/configs/auth';
import type { UserLogin } from '~/interfaces/auth';
import { login } from '~/services/auth';

import useGlobalStore from '../store';

export async function fetchLogin(userData: UserLogin) {
  const { set } = useLocalStorage('auth', {}, true);
  const { auth, error } = useGlobalStore();
  try {
    const { accessToken, role } = await login(userData);
    if (accessToken) {
      auth.isAuthenticated = true;
      auth.accessToken = accessToken;
      auth.role = role;
      set(JSON.stringify({ accessToken, role }));
    } else {
      error.message = 'Invalid username or password';
    }
  } catch (err) {
    const typedError = err as Error;
    error.message = typedError.message;
  }
}

export const fetchLogout = () => {
  const { remove } = useLocalStorage('auth', {}, true);
  const { auth } = useGlobalStore();
  auth.accessToken = '';
  auth.role = ROLES.Guest;
  auth.isAuthenticated = false;
  remove();
};

const authActions = {
  fetchLogin,
  fetchLogout
};

export default authActions;
