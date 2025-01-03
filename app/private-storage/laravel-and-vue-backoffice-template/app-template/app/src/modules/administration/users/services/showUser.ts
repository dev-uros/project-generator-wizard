import {HttpMethod, useFetch} from "src/modules/shared/utils/fetch";
import type {UserDetailsResponse} from "../types";

export async function showUser(userId: number) {
  const {data: {user}} = await useFetch<UserDetailsResponse>({
    url: `/administration/users/${userId}/show`,
    method: HttpMethod.GET,
  })
  return user;
}
