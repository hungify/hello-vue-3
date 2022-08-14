import { customRef } from 'vue';

export function useDebouncedRef<T>(value: T, delay = 200) {
  let timeout: NodeJS.Timeout | null = null;
  let valueDebounced = value;
  return customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return valueDebounced;
      },
      set(newValue: T) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
          valueDebounced = newValue;
          trigger();
        }, delay);
      }
    };
  });
}
