import {acceptHMRUpdate, defineStore} from 'pinia';
import {HomeStoreState} from "./types";



export const useHomeStore = defineStore('homeStore', {
  state: (): HomeStoreState => ({}),
  getters: {},
  actions: {}

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}

