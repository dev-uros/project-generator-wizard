import {api} from "boot/axios";

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export async function useFetch<TResponse, TData = null, TParams = null>(
  options: {
    url: string;
    method: HttpMethod;
    data?: TData;
    params?: TParams;
  }
): Promise<TResponse> {

  const { url, method, data, params } = options;
  try {
    const response = await api(url, { method, data, params });
    return response.data as TResponse;
  } catch (error) {
    // Handle errors or rethrow
    throw error;
  }
}
