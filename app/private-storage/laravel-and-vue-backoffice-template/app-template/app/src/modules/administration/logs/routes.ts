
import type {RouteRecordRaw} from "vue-router";

import auth from "../../shared/middleware/auth";

import setupLogsPage from "./middleware/setupLogsPage"
import setupLogDetailsPage from "src/modules/administration/logs/middleware/setupLogDetailsPage";

export const logsRoutes: RouteRecordRaw[] = [
  {
    path: 'logs',
    component: () => import('./pages/LogsPage.vue'),
    name: 'logs.index',
    meta: {middleware: [auth, setupLogsPage]}
  },
  {
    path: 'logs/details/:folder/:file/:requestId',
    component: () => import('./pages/LogDetailsPage.vue'),
    name: 'logs.details',
    meta: {middleware: [auth, setupLogDetailsPage]}
  }
];
