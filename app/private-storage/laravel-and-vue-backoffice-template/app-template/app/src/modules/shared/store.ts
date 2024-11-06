import {acceptHMRUpdate, defineStore} from 'pinia';
import {SharedStoreState} from "./types";
import {getServerHealthCheckApi} from "./services/sharedService";
import {formatNumberToCurrency} from "./utils/sharedUtils"


export const useSharedStore = defineStore('sharedStore', {
  state: (): SharedStoreState => ({
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
  import.meta.hot.accept(acceptHMRUpdate(useSharedStore, import.meta.hot))
}

    