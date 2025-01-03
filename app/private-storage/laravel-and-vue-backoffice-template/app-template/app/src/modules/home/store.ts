import {acceptHMRUpdate, defineStore} from 'pinia';



export const useHomeStore = defineStore('homeStore', {
  state: () => ({}),
  getters: {},
  actions: {}

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}

