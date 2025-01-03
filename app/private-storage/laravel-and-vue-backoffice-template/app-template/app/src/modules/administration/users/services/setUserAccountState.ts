import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {StoreNewUserResponse} from "../types";

export async function setAccountState(userId: number){
  const {data: {user}} = await useFetch<StoreNewUserResponse>({
    url: `/administration/users/set-status/${userId}`,
    method: HttpMethod.PATCH
  })
  return user;
}
