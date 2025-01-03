import {acceptHMRUpdate, defineStore} from 'pinia';
import type {
  AuthStoreState,
  LoginRequest,
  ResetPasswordRequest,
} from "./types";

import type {User} from "src/modules/administration/users/types";


import {Cookies} from "quasar";
import {useSettingsStore} from "src/modules/settings/store";
import {login} from "./services/loginService";
import {logout} from "./services/logoutService";
import {makeForgotPasswordRequest} from "./services/forgotPasswordService";
import {activateAccount} from "./services/activateAccountService";
import {resetPassword} from "./services/resetPasswordService";
import {autoLogin} from "./services/autoLoginService";


export const useAuthStore = defineStore('authStore', {
  state: (): AuthStoreState => ({
    user: {} as User,
    token: ''
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  actions: {
    async login(request: LoginRequest) {

      const {user, token, sessionTimeout} = await login(request)

      this.setLoggedInUserData(user, token, sessionTimeout)

    },

    async logout() {
      await logout()
      await this.revokeSession();
    },


    async forgotPassword(email: string) {
      await makeForgotPasswordRequest(email)
    },

    async activateAccount(request: ResetPasswordRequest) {
      await activateAccount(request)
    },

    async resetPassword(request: ResetPasswordRequest) {
      await resetPassword(request)
    },

    async autoLogin() {
      const userSessionToken: string = Cookies.get('userSessionToken');

      const {
        user,
        isUserSessionActive,
        sessionTimeout,
      } = await autoLogin()


      if (isUserSessionActive) {
        await this.setLoggedInUserData(user, userSessionToken, sessionTimeout)

      }else{
        Cookies.remove('userSessionToken', {
          path: '/'
        });
      }
      return isUserSessionActive;
    },

    setLoggedInUserData(user: User, token: string, sessionTimeout: number){
      this.setUserData(user);

      this.setUserToken(token);

      this.setUserSessionDurationData(sessionTimeout);

      this.setUserCookie(token);

    },
    setUserData(user: User) {
      this.user = user;
    },

    setUserToken(token: string) {
      this.token = token;
    },

    setUserSessionDurationData(sessionDuration: number) {
      useSettingsStore().setSessionTimeout(sessionDuration);
    },

    async setUserCookie(userSessionToken: string) {
      Cookies.set('userSessionToken', userSessionToken, {
        path: '/',
      });
    },
    async revokeSession() {
      Cookies.remove('userSessionToken', {
        path: '/'
      });
      this.$reset();
    },

  }

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}

