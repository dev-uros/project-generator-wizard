import {acceptHMRUpdate, defineStore} from 'pinia';
import type {DocsStoreState} from "./types";
import {getServerHealthCheckApi} from "./services/docsService";
import {formatNumberToCurrency} from "./utils/docsUtils"


export const useDocsStore = defineStore('docsStore', {
  state: (): DocsStoreState => ({
    counter: 0,
    serverHealthCheck: ''
  }),
  getters: {
    getDoubleCount: (state) => state.counter * 2,
    getFormattedCounter: (state) => formatNumberToCurrency(state.counter)
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
    },
    async getServerHealthCheck(){
        this.serverHealthCheck = await getServerHealthCheckApi();
    }
  }

})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDocsStore, import.meta.hot))
}

