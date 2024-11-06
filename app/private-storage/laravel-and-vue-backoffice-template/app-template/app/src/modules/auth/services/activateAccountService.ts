import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import {ResetPasswordRequest, ResetPasswordResponse} from "../types";


export async function activateAccount(request: ResetPasswordRequest) {
  await useFetch<ResetPasswordResponse, ResetPasswordRequest>({
    url: '/auth/activate-account',
    method: HttpMethod
      .POST,
    data: request
  });
}


