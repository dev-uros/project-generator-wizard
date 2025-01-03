import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {UsersResponse, GetUsersFilters} from "../types";

export async function getUsers(userFilters: GetUsersFilters) {
  console.log(userFilters);
  console.log('dodje ovde get users')
  const  {data: {users}} = await useFetch<UsersResponse, null, GetUsersFilters>({
    url: '/administration/users/index',
    method: HttpMethod.GET,
    params: userFilters,
  });
  return users;
}
