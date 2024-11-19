import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import {
  ApiLogFileEntriesResponse, ApiLogFileEntryDetailsResponse,
  ApiLogFilesResponse,
  GetLogFileEntriesFilter,
  GetLogFileEntryDetailsFilter,
  GetLogFilesFilter
} from "../types";

export async function getApiLogFileEntryDetails(params: GetLogFileEntryDetailsFilter) {

  const  {data: {logEntryDetails}} = await useFetch<ApiLogFileEntryDetailsResponse, null, GetLogFileEntryDetailsFilter>({
    url: '/log-viewer/api-logs/entry-details',
    method: HttpMethod.GET,
    params: params,
  });
  return logEntryDetails;
}
