import { useLocalStorage } from '~/composables/useLocalStorage';
import { login } from '~/services/auth';

import useGlobalStore from '../store';

export async function fetchLogin({ username }: { username: string }, cb: () => void) {
  const { set } = useLocalStorage('auth', {}, true);
  const { auth, error } = useGlobalStore();
  try {
    const { accessToken, roles, user } = await login(username);
    if (accessToken) {
      auth.isAuthenticated = true;
      auth.accessToken = accessToken;
      auth.roles = roles;
      auth.user = user;
      set(JSON.stringify({ accessToken, roles, user }));
      cb();
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
  auth.roles = [];
  auth.user = null;
  auth.isAuthenticated = false;
  remove();
};

const authActions = {
  fetchLogin,
  fetchLogout,
};

export default authActions;
