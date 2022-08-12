import { useAbility } from '@casl/vue';
import type { AppAbility } from '~/configs/ability';

export const useAppAbility = () => useAbility<AppAbility>();
