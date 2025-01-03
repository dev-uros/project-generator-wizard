import type {RouteRecordRaw} from "vue-router";
import guest from "../shared/middleware/guest";

export const authRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    component: () => import('./pages/LoginPage.vue'),
    name: 'login',
    meta: {middleware: [guest]}
  },
  {
    path: 'forgot-password',
    component: () => import('./pages/ForgotPasswordPage.vue'),
    meta: {middleware: [guest]},
    name: 'forgot-password'
  },

  {
    path: 'reset-password/:token/',
    component: () => import('./pages/ResetPasswordPage.vue'),
    meta: {middleware: [guest]},
    name: 'reset-password'
  },
  {
    path: 'activate-account/:token/',
    component: () => import('./pages/ActivateAccountPage.vue'),
    meta: {middleware: [guest]},
    name: 'activate-account'
  },

];
