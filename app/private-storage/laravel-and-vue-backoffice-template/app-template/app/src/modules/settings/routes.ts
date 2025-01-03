
import type {RouteRecordRaw} from "vue-router";

import auth from "../shared/middleware/auth";


export const settingsRoutes: RouteRecordRaw[] = [
  {
    path: 'settings',
    component: () => import('src/modules/settings/pages/SettingsPage.vue'),
    name: 'settings.session-timeout',
    meta: {middleware: [auth]}
  },
];

