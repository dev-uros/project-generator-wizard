import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type { ApiLogFileEntryDetailsResponse,
  GetLogFileEntryDetailsFilter} from "../types";

export async function getApiLogFileEntryDetails(params: GetLogFileEntryDetailsFilter) {

  const  {data: {logEntryDetails}} = await useFetch<ApiLogFileEntryDetailsResponse, null, GetLogFileEntryDetailsFilter>({
    url: '/log-viewer/api-logs/entry-details',
    method: HttpMethod.GET,
    params: params,
  });
  return logEntryDetails;
}
