import { api } from 'boot/axios'
import useNotificationMessage, { NotificationType } from './notificationMessage'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export async function useFetch<TResponse, TData = null, TParams = null>(options: {
  url: string
  method: HttpMethod
  data?: TData
  params?: TParams
}): Promise<TResponse> {
  const { url, method, data = null, params = null } = options

  if (!navigator.onLine) {
    useNotificationMessage(
      NotificationType.NO_INTERNET_CONNECTION,
      'Niste povezani na internet, molimo povežite se i pokušajte ponovo',
    )
    throw new Error('No internet connection!')
  }
  try {
    const response = await api(url, { method, data, params })

    return response.data as TResponse
  } catch (error) {

    console.error(error);
    // Handle errors or rethrow
    throw error
  }
}
