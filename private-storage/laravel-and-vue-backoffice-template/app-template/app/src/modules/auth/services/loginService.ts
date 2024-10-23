import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import {LoginRequest, LoginResponse} from "../types";


export async function login(request: LoginRequest) {
  const {
    data: {
      user,
      token,
      sessionTimeout,
      userContacts
    }
  } = await useFetch<LoginResponse, LoginRequest>({url: '/auth/login', method: HttpMethod.POST, data: request});

  return {user, token, sessionTimeout, userContacts}
}




