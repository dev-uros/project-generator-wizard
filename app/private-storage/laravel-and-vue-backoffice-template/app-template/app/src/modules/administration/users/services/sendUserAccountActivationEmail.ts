import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {ResendActivationEmailResponse} from "../types";

export async function sendActivationEmail(userId: number) {
  await useFetch<ResendActivationEmailResponse>({
    url: `/administration/users/resend-activation-email/${userId}`,
    method: HttpMethod.POST,
  })
}
