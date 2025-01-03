
import type {RouteRecordRaw} from "vue-router";


export const sharedRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
