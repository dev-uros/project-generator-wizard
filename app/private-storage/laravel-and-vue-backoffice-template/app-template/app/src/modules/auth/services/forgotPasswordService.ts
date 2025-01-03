import {HttpMethod, useFetch} from "../../shared/utils/fetch";
import type {ForgotPasswordResponse} from "../types";


export async function makeForgotPasswordRequest(email: string) {
  await useFetch<ForgotPasswordResponse, { email: string }>({
    url: '/auth/forgot-password',
    method: HttpMethod.POST,
    data: {email}
  });
}


