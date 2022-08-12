import { createRouter, createWebHistory } from 'vue-router';
import useGlobalStore from '~/app/store';
import NavigationVertical from '~/layouts/components/NavigationVertical.vue';
import DadJokes from '~/pages/DadJokes';
import Home from '~/pages/Home.vue';
import Login from '~/pages/Login.vue';
import NotFound from '~/pages/NotFound.vue';
import Project from '~/pages/Project.vue';
import TodoApp from '~/pages/TodoApp';
import UserProfile from '~/pages/UserProfile.vue';
import UserProfilePreview from '~/pages/UserProfilePreview.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    name: 'projects',
    path: '/projects',
    component: NavigationVertical,
    meta: { requiresAuth: true },
    children: [
      {
        name: 'profile',
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview,
        },
        meta: { requiresAuth: true },
      },
      {
        path: ':slug',
        component: Project,
        name: 'projectId',
        meta: { requiresAuth: true },
      },
      {
        name: 'dadJokes',
        path: 'dad-jokes',
        component: DadJokes,
        meta: { requiresAuth: true },
      },
      {
        name: 'todoApp',
        path: 'todo-app',
        component: TodoApp,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: NotFound,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { auth } = useGlobalStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
