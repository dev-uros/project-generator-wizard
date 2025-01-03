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
  try {
    console.log('pokusavam')
    const response = await api(url, { method, data, params })

    return response.data as TResponse
  } catch (error) {
    useNotificationMessage(NotificationType.ERROR, 'Došlo je do greške pri povezivanju sa serverom')
    // Handle errors or rethrow
    throw error
  }
}
