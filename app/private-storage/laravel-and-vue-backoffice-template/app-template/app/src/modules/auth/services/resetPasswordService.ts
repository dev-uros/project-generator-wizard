import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import type {ResetPasswordRequest, ResetPasswordResponse} from "../types";


export async function resetPassword(request: ResetPasswordRequest) {
  await useFetch<ResetPasswordResponse, ResetPasswordRequest>({
    url: '/auth/reset-password',
    method: HttpMethod
      .POST,
    data: request
  });
}


