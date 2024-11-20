import {RouteRecordRaw} from 'vue-router';
import auth from 'src/modules/shared/middleware/auth';
import {settingsRoutes} from "src/modules/settings/routes";
import {homeRoutes} from "src/modules/home/routes";
import guest from "src/modules/shared/middleware/guest";
import {authRoutes} from "src/modules/auth/routes";
import {sharedRoutes} from "src/modules/shared/routes";
import {administrationRoutes} from "src/modules/administration/routes";
import {docsRoutes} from "src/modules/docs/routes";


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
