import {acceptHMRUpdate, defineStore} from 'pinia';
import {
  AuthStoreState,
  LoginRequest,
  ResetPasswordRequest,
} from "./types";

import {User} from "src/modules/administration/users/types";


import {Cookies} from "quasar";
import {useSettingsStore} from "src/modules/settings/store";
import {Contact} from "src/modules/auth/types";
import {login} from "./services/loginService";
import {logout} from "./services/logoutService";
import {makeForgotPasswordRequest} from "./services/forgotPasswordService";
import {activateAccount} from "./services/activateAccountService";
import {resetPassword} from "./services/resetPasswordService";
import {autoLogin} from "./services/autoLoginService";


export const useAuthStore = defineStore('authStore', {
  state: (): AuthStoreState => ({
    user: {},
    token: '',
    contacts: [],
    gallery: [],
    allFiles: [],
    allFilesFiltered: []
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getGallery: (state) => state.gallery,
    getCurrentlyActiveGalleryItem: (state) => state.gallery.find(file => file.currentlyActiveInCarousel),
    getAllFiles: (state)=>state.allFiles,
    countMessagesToForward: (state) => {
      return (chattingToId: number) => state.contacts.find(contact => contact.id === chattingToId)!.messages.filter(msg => msg.forwardMessage).length
    }
  },
  actions: {
    async login(request: LoginRequest) {

      const {user, token, sessionTimeout, userContacts} = await login(request)

      this.setLoggedInUserData(user, token, sessionTimeout, userContacts)

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
        userContacts
      } = await autoLogin()


      if (isUserSessionActive) {
        await this.setLoggedInUserData(user, userSessionToken, sessionTimeout, userContacts)

      }else{
        Cookies.remove('userSessionToken', {
          path: '/'
        });
      }
      return isUserSessionActive;
    },

    setLoggedInUserData(user, token, sessionTimeout, userContacts){
      this.setUserData(user);

      this.setUserToken(token);

      this.setUserSessionDurationData(sessionTimeout);

      this.setUserCookie(token);

      this.setUserContacts(userContacts)
    },
    setUserData(user: User) {
      this.user = user;
    },

    setUserToken(token: string) {
      this.token = token;
    },

    setUserContacts(userContacts: Contact[]) {
      this.contacts = userContacts.map((contact)=>{
        contact.letter = `${contact.name[0]}${contact.surname[0]}`
        contact.messages = [];
        contact.gallery = [];
        contact.hasUnreadMessages = false;
        contact.unreadMessageCount = 0;
        contact.isOnline = false;
        contact.isTyping = false
        contact.scrollToTopCount = 0;
        return contact
      });
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

