import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import {StoreNewUserRequest, StoreNewUserResponse} from "../types";

export async function storeUser(request: StoreNewUserRequest) {
  const {data: {user}} = await useFetch<StoreNewUserResponse, StoreNewUserRequest>({
    url: '/administration/users/store',
    method: HttpMethod.POST,
    data: request
  });
  return user;
}
