import { ref } from 'vue';

export const useLocalStorage = (key: string, defaultValue?: any, sync?: boolean) => {
  defaultValue = localStorage.getItem(key);
  const storage = ref(JSON.parse(defaultValue) || defaultValue);
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
    storage: storage?.value ? JSON.parse(storage.value) : storage.value,
    set,
    remove,
  };
};
