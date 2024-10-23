
import {RouteRecordRaw} from "vue-router";

import auth from "../../shared/middleware/auth";

import setupUsersPage from "./middleware/setupUsersPage"
import setupUserDetailsPage from "src/modules/administration/users/middleware/setupUserDetailsPage";

export const usersRoutes: RouteRecordRaw[] = [
  {
    path: 'users',
    component: () => import('./pages/UserPage.vue'),
    name: 'users.index',
    meta: {middleware: [auth, setupUsersPage]}
  },
  {
    path: 'users/:id',
    component: () => import('./pages/UserDetailsPage.vue'),
    name: 'users.show',
    meta: {middleware: [auth, setupUserDetailsPage]}
  },
];
