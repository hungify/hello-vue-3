import type { AuthState, Roles, UserLogin } from '~/interfaces/auth';

export const login = async ({ email }: UserLogin) => {
  type LoginResponse = Omit<AuthState, 'isAuthenticated'>;

  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      if (['admin', 'editor', 'subscriber'].includes(email)) {
        const upperFirstLetter = email.charAt(0).toUpperCase() + email.slice(1);
        return resolve({
          accessToken: '123214sdk',
          role: upperFirstLetter as Roles
        });
      } else {
        return reject({ message: 'Invalid user and password' });
      }
    }, 1000);
  });
};
