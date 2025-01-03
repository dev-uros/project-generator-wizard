import {acceptHMRUpdate, defineStore} from 'pinia';
import type {LogsStoreState} from "./types";
import {getApiLogFolders} from "src/modules/administration/logs/services/getApiLogFolders";
import {getApiLogFiles} from "src/modules/administration/logs/services/getApiLogFiles";
import {getApiLogFileEntries} from "src/modules/administration/logs/services/getApiLogFileEntries";
import {getApiLogFileEntryDetails} from "src/modules/administration/logs/services/getApiLogFileEntryDetails";
import {mergeQueryAndBindings} from "src/modules/administration/logs/utils/logsUtils";


export const useLogsStore = defineStore('logsStore', {
  state: (): LogsStoreState => ({
    apiLogFolders: [],
    apiLogFiles: [],
    apiLogFileEntries: [],
    apiLogEntryDetails: undefined
  }),
  getters: {
    getDetails: (state) => state.apiLogEntryDetails,
  },
  actions: {
    async getApiLogFolderList() {
      this.apiLogFolders = await getApiLogFolders()
    },
    async getApiLogFileList(folderName: string) {
      this.apiLogFiles = (await getApiLogFiles({folderName})).reverse()
    },
    async getApiLogFileEntries(folderName: string, fileName: string) {
      this.apiLogFileEntries = (await getApiLogFileEntries({folderName, fileName})).reverse()
    },
    async getApiLogEntryDetails(folderName: string, fileName: string, requestId: string) {
      const logEntryDetails = await getApiLogFileEntryDetails({folderName, fileName, requestId})
      logEntryDetails.context.queries = mergeQueryAndBindings(logEntryDetails.context.queries)
      this.apiLogEntryDetails = logEntryDetails
    }
  }

})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLogsStore, import.meta.hot))
}

