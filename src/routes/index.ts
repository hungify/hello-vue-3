import { createRouter, createWebHistory } from 'vue-router';
import useGlobalStore from '~/app/store';
import { ROLES } from '~/configs/auth';
import DadJokes from '~/pages/DadJokes';
import Home from '~/pages/Home.vue';
import Login from '~/pages/Login.vue';
import NotFound from '~/pages/NotFound.vue';
import Project from '~/pages/Project.vue';
import TodoApp from '~/pages/TodoApp';
import UserProfile from '~/pages/UserProfile.vue';
import UserProfilePreview from '~/pages/UserProfilePreview.vue';
import Unauthorized from '~/pages/Unauthorized.vue';
import Admin from '~/pages/Admin.vue';
import Editor from '~/pages/Editor.vue';
import Subscriber from '~/pages/Subscriber.vue';
import Navigation from '~/layouts/components/Navigation.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    name: 'admin',
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true, allowedRoles: [ROLES.Admin] }
  },
  {
    name: 'editor',
    path: '/editor',
    component: Editor,
    meta: { requiresAuth: true, allowedRoles: [ROLES.Editor] }
  },
  {
    name: 'subscriber',
    path: '/subscriber',
    component: Subscriber,
    meta: { requiresAuth: true, allowedRoles: [ROLES.Subscriber] }
  },
  {
    name: 'projects',
    path: '/projects',
    component: Navigation,
    meta: { requiresAuth: true, allowedRoles: [ROLES.Admin] },
    children: [
      {
        name: 'profile',
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        },
        meta: { requiresAuth: true }
      },
      {
        path: ':slug',
        component: Project,
        name: 'projectId',
        meta: { requiresAuth: true }
      },
      {
        name: 'dadJokes',
        path: 'dad-jokes',
        component: DadJokes,
        meta: { requiresAuth: true, allowedRoles: [ROLES.Editor] }
      },
      {
        name: 'todoApp',
        path: 'todo-app',
        component: TodoApp,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: Unauthorized,
    meta: { requiresAuth: false }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: NotFound,
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _from, next) => {
  const { auth } = useGlobalStore();
  const isRequiredAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isRequiredRoles = to.matched.filter(
    (record) => record.meta.allowedRoles
  );
  const lastRouteRequiredRoles =
    isRequiredRoles[isRequiredRoles.length - 1]?.meta.allowedRoles;

  if (isRequiredAuth) {
    if (auth.isAuthenticated) {
      if (lastRouteRequiredRoles?.includes(auth.role)) return next();
      else return next({ name: 'unauthorized' });
    } else return next({ name: 'login' });
  } else return next();
});

export default router;
