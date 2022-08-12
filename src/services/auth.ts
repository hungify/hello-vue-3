import type { Auth } from '~/interfaces/auth';

type AuthToResponse = Omit<Auth, 'isAuthenticated'>;
export const login = async (user: string) => {
  return new Promise<AuthToResponse>((resolve, reject) => {
    setTimeout(() => {
      if (user === 'abc') {
        return resolve({
          accessToken: 'abc',
          roles: ['admin'],
          user: {
            id: '1',
          },
        });
      } else {
        return reject({ message: 'Invalid user and password' });
      }
    }, 1000);
  });
};
