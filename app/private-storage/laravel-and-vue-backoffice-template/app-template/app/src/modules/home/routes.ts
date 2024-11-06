
import {RouteRecordRaw} from "vue-router";

import auth from "../shared/middleware/auth";

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('./pages/HomePage.vue'),
    name: 'home',
    meta: {middleware: [auth]}
  }
];
