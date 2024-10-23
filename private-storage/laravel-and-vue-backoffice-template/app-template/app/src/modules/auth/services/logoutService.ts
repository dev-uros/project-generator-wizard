import {HttpMethod, useFetch} from "../../shared/utils/fetch";


export async function logout() {
  await useFetch({url: '/auth/logout', method: HttpMethod.POST});
}


