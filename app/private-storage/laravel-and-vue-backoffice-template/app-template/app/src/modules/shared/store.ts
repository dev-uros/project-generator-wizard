import {acceptHMRUpdate, defineStore} from 'pinia';
import type {SharedStoreState} from "./types";


export const useSharedStore = defineStore('sharedStore', {
  state: (): SharedStoreState => ({
    counter: 0,
    serverHealthCheck: ''
  }),
  getters: {
    getDoubleCount: (state) => state.counter * 2,
  },
  actions: {
    exampleStoreFunction(){
        this.counter = 0;
        this.serverHealthCheck = ''
    },
    addCount() {
      this.counter = this.counter + 1;
    },
    subtractCount() {
      this.counter = this.counter - 1;
    }
  }

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSharedStore, import.meta.hot))
}

