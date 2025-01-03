import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import type {AutoLoginResponse} from "../types";


export async function autoLogin() {
  const {
    data: {
      user,
      isUserSessionActive,
      sessionTimeout,
    }
  } = await useFetch<AutoLoginResponse>({url: '/auth/auto-login', method: HttpMethod.POST})

  return {user, isUserSessionActive, sessionTimeout}
}




