import { computed, ref, unref, watch } from 'vue';

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const savedState = localStorage.getItem(key);
  const storage = ref<T>(savedState ? JSON.parse(savedState) : initialValue);

  watch(storage, (state) => {
    if (state === null) {
      localStorage.removeItem(key);
    }
  });

  return computed({
    get: () => unref(storage),
    set: (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      storage.value = newValue;
    }
  });
}
