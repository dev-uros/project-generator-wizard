import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {ApiLogFoldersResponse} from "../types";

export async function getApiLogFolders() {

  const  {data: {logFolders}} = await useFetch<ApiLogFoldersResponse, null, null>({
    url: '/log-viewer/api-logs/folder-list',
    method: HttpMethod.GET,
  });
  return logFolders;
}
