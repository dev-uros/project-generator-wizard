import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {ApiLogFilesResponse, GetLogFilesFilter} from "../types";

export async function getApiLogFiles(folderName: GetLogFilesFilter) {

  const  {data: {logFiles}} = await useFetch<ApiLogFilesResponse, null, GetLogFilesFilter>({
    url: '/log-viewer/api-logs/file-list',
    method: HttpMethod.GET,
    params: folderName
  });
  return logFiles;
}
