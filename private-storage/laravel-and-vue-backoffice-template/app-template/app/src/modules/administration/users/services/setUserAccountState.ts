import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import {StoreNewUserResponse} from "../types";

export async function setAccountState(userId: number){
  const {message, data: {user}} = await useFetch<StoreNewUserResponse>({
    url: `/administration/users/set-status/${userId}`,
    method: HttpMethod.PATCH
  })
  return user;
}
