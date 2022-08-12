/// <reference types="vite/client" />

import 'vue-router';
import type { Roles } from './configs/auth';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean;
    allowedRoles?: Roles[];
  }
}
