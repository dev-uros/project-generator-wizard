import {StoreNewUserRequest, StoreNewUserResponse} from "../types";
import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";

export async function updateUser(userId: number, request: StoreNewUserRequest){
  const {data: {user}} = await useFetch<StoreNewUserResponse, StoreNewUserRequest>({
    url: `/administration/users/${userId}/update`,
    method: HttpMethod.PATCH,
    data: request
  })
  return user
}
