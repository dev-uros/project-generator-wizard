import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {SetSessionTimeoutResponse} from "src/modules/settings/types";

export async function updateSessionTimeOut(timeout: number){
  const {data: {sessionTimeout}} = await useFetch<SetSessionTimeoutResponse, { timeout: number }>({
    url: '/settings/session-timeout',
    method: HttpMethod.PATCH,
    data: {timeout}
  })

  return sessionTimeout;
}
