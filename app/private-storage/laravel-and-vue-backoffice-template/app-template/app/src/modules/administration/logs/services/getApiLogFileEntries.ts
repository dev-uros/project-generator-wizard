import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import {ApiLogFileEntriesResponse, ApiLogFilesResponse, GetLogFileEntriesFilter, GetLogFilesFilter} from "../types";

export async function getApiLogFileEntries(params: GetLogFileEntriesFilter) {

  const  {data: {logEntries}} = await useFetch<ApiLogFileEntriesResponse, null, GetLogFileEntriesFilter>({
    url: '/log-viewer/api-logs/file-entries',
    method: HttpMethod.GET,
    params: params
  });
  return logEntries;
}
