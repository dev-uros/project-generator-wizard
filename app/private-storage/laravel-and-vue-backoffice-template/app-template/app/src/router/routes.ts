import { administrationRoutes } from 'src/modules/administration/routes';
import { authRoutes } from 'src/modules/auth/routes';
import { docsRoutes } from 'src/modules/docs/routes';
import { homeRoutes } from 'src/modules/home/routes';
import { settingsRoutes } from 'src/modules/settings/routes';
import auth from 'src/modules/shared/middleware/auth';
import guest from 'src/modules/shared/middleware/guest';
import { sharedRoutes } from 'src/modules/shared/routes';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main/MainLayout.vue'),
    meta: {
      middleware: [auth]
    },
    children: [
      ...docsRoutes,
      ...homeRoutes,
      ...administrationRoutes,
      ...settingsRoutes,
    ],
  },

  {
    path: '/auth',
    component: () => import('layouts/auth/AuthLayout.vue'),
    meta: {
      middleware: [guest],
    },
    redirect: {name: 'login'},
    children: [
      ...authRoutes
    ]
  },

  // Shared routes contains catch all 404 route
  ...sharedRoutes

];

export default routes;
