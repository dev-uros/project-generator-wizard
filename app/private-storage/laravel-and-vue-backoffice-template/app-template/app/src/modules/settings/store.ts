import {acceptHMRUpdate, defineStore} from 'pinia';

import {updateSessionTimeOut} from "src/modules/settings/services/updateSessionTimeOut";
import type {SettingsStore} from "src/modules/settings/types";

export const useSettingsStore = defineStore('settingsStore', {

  state: ():SettingsStore => ({
    sessionTimeout: 0
  }),
  getters: {
    getSessionTimeout: (state) => state.sessionTimeout,
  },
  actions: {
    async updateUserSessionTimeoutApi(timeout: number) {

      const  sessionTimeout  = await updateSessionTimeOut(timeout);

      this.setSessionTimeout(sessionTimeout.timeout_period)

    },
    setSessionTimeout(timeout_period: number) {
      this.sessionTimeout = timeout_period;
    }
  }
});




if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
}

