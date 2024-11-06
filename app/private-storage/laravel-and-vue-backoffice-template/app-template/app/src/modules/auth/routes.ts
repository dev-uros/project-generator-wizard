import {RouteRecordRaw} from "vue-router";
import guest from "src/modules/shared/middleware/guest";


export const authRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    component: () => import('./pages/LoginPage.vue'),
    name: 'login',
    middleware: [guest]
  },
  {
    path: 'forgot-password',
    component: () => import('./pages/ForgotPasswordPage.vue'),
    middleware: [guest],
    name: 'forgot-password'
  },

  {
    path: 'reset-password/:token/',
    component: () => import('./pages/ResetPasswordPage.vue'),
    middleware: [guest],
    name: 'reset-password'
  },
  {
    path: 'activate-account/:token/',
    component: () => import('./pages/ActivateAccountPage.vue'),
    middleware: [guest],
    name: 'activate-account'
  },

];
