import type { TodosStore } from './todo';
import type { AuthStore } from './auth';

export interface Store extends TodosStore, AuthStore {
  error: {
    message: string;
  };
}
