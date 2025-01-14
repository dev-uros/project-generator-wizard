import {Notify} from "quasar";

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  STICKY_ERROR = 'sticky_error',
  NO_INTERNET_CONNECTION = 'no_internet_connection',

}
export default function useNotificationMessage( type: string, message: string){

  switch(type){

    case(NotificationType.SUCCESS):
      Notify.create({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: message,
        position: 'top',
      });
      break;

    case(NotificationType.ERROR):
      Notify.create({
        color: 'red-7',
        textColor: 'white',
        icon: 'error',
        message: message,
        position: 'top',
      });
      break;

      case NotificationType.NO_INTERNET_CONNECTION:
        Notify.create({
          color: 'red-7',
          textColor: 'white',
          icon: 'wifi_off',
          message: message,
          position: 'top',
        })
        break

    case(NotificationType.STICKY_ERROR):
      Notify.create({
        color: 'red-7',
        textColor: 'white',
        icon: 'error',
        message: message,
        position: 'top',
        timeout: 0,
        actions: [
          { color: 'white', icon: 'close' }
        ]
      });
  }

}
