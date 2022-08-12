import type { SUBJECTS } from '~/configs/auth';
import type { ACTIONS, ROLES } from '~/configs/auth';

export interface AuthState {
  accessToken: string;
  isAuthenticated: boolean;
  role: Roles;
}

export interface User {
  email: string;
  role?: Roles;
  id?: string;
  name?: string;
}

// export type UserLogin = Pick<User, 'email' | 'password'>;
export type UserLogin = Pick<User, 'email'>;

export type UserRegister = Omit<User, 'id' | 'isAuthenticated'>;

export type Roles = keyof typeof ROLES;

export type Actions = keyof typeof ACTIONS;

export type Subjects = keyof typeof SUBJECTS;

export interface AuthActions {
  fetchLogin: (user: UserLogin) => void;
  fetchLogout: () => void;
}

export interface AuthStore {
  auth: AuthState & AuthActions;
}
