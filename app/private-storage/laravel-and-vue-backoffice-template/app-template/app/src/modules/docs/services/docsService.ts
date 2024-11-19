import {HttpMethod, useFetch} from "../../shared/utils/fetch";


export async function getServerHealthCheckApi() {
const  {message} = await useFetch<{message: string}, null, null>({
    url: 'healthcheck',
    method: HttpMethod.GET,
});
  return message;
}
    