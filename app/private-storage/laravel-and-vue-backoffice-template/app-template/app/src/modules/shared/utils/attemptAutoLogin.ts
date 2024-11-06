import {useAuthStore} from "src/modules/auth/store";
import useNotificationMessage, {NotificationType} from "src/modules/shared/utils/notificationMessage";

export default async function useAttemptAutoLogin() {

  const userStore = useAuthStore();
  const isUserSessionActive = await userStore.autoLogin();

  if(!isUserSessionActive){
    useNotificationMessage(NotificationType.ERROR,'Istekla Vam je sesija, molimo ulogujte se ponovo!');
    return false
  }else{
    return true;
  }

}
