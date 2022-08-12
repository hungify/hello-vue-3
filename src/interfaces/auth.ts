import type { Roles } from '~/configs/auth';

interface User {
  id: string;
  // name: string;
  // email: string;
}

export interface AuthState {
  accessToken: string;
  // refreshToken: string;
  isAuthenticated: boolean;
  user: User | null;
  roles: Roles[];
}

export type FetchLogin<Args> = (args: Args, cb: () => void) => void;

export interface AuthActions {
  fetchLogin: ({ username }: { username: string }, cb: () => void) => void;
  fetchLogout: () => void;
}

export interface AuthStore {
  auth: AuthState & AuthActions;
}
