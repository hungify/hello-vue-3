/// <reference types="vite/client" />
import 'vue-router';
import type { Roles } from './configs/auth';
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'vue-router' {
  interface RouteMeta {
    role?: Roles;
    requiresAuth: boolean;
  }
}
