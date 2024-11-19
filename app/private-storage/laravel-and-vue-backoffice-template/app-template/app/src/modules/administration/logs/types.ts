import {User} from "src/modules/administration/users/types";

export interface LogsStoreState{
  apiLogFolders: string[],
  apiLogFiles: string[],
  apiLogFileEntries: ApiLogFileEntry[],
  apiLogEntryDetails: ApiLogFileEntryDetail | undefined
}

export interface ApiLogFileEntry {
  requestId: string,
  method: string,
  status: number,
  userId: number,
  user: string,
  requestTimeStamp: string,
  requestDate: string,
  requestTime: string
}

export interface ApiLogFileEntryDetail {
  message: string,
  context: ApiLogFileEntryDetailContext,
  level: number,
  level_name: string,
  channel: string,
  datetime: string,
  extra: []
}

export interface ApiLogFileEntryDetailContext {
  url: string,
  method: string,
  parameters: string[],
  user: User,
  queries: QueryArray[],
  additional_messages: string[],
  error_details:ErrorDetails,
  request_timestamp: string,
  request_date: string,
  request_time: string,
  request_id: string,
  status: number
}

export interface QueryArray{
  query: string,
  bindings: string[],
  time: number
}

export interface ErrorDetails {
  class: string,
  message: string,
  code: number,
  file: string
}


export interface ApiLogFoldersResponse {
  message:string,
  data: {
    logFolders: string[]
  }
}

export interface ApiLogFilesResponse {
  message:string,
  data: {
    logFiles: string[]
  }
}

export interface ApiLogFileEntryDetailsResponse {
  message:string,
  data: {
    logEntryDetails: ApiLogFileEntryDetail
  }
}

export interface ApiLogFileEntriesResponse {
  message:string,
  data: {
    logEntries: ApiLogFileEntry[]
  }
}
export interface GetLogFilesFilter {
  folderName: string
}

export interface GetLogFileEntriesFilter {
  folderName: string,
  fileName: string
}


export interface GetLogFileEntryDetailsFilter {
  folderName: string,
  fileName: string,
  requestId: string
}
