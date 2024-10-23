export default function useRouteRequiresAuth(requestUrl: string) {
  const noAuthRoutes = {
    Login: '/auth/login',
    ActivateAccount: '/auth/activate-account',
    ResetPassword: '/auth/reset-password',
    ForgotPassword: '/auth/forgot-password',
    CheckIsUserAccountActivated: '/auth/check-is-user-account-activated'
  };
  return !Object.values(noAuthRoutes).includes(requestUrl);
}
