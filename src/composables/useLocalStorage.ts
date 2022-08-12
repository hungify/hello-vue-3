/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue';

export const useLocalStorage = (
  key: string,
  defaultValue?: any,
  sync?: boolean
) => {
  const value = localStorage.getItem(key);

  const storage = ref(value ? JSON.parse(value) : defaultValue);

  const set = (value: any) => {
    storage.value = value;
    if (sync) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  const remove = () => {
    storage.value = null;
    localStorage.removeItem(key);
  };

  return {
    storage:
      Object.keys(storage.value).length > 0
        ? JSON.parse(storage.value)
        : storage.value,
    set,
    remove
  };
};
