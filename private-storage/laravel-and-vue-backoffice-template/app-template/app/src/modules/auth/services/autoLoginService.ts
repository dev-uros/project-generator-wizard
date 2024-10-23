import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import {AutoLoginResponse,} from "../types";
import {Cookies} from "quasar";


export async function autoLogin() {
  const {
    data: {
      user,
      isUserSessionActive,
      sessionTimeout,
      userContacts
    }
  } = await useFetch<AutoLoginResponse>({url: '/auth/auto-login', method: HttpMethod.POST})

  return {user, isUserSessionActive, sessionTimeout, userContacts}
}




