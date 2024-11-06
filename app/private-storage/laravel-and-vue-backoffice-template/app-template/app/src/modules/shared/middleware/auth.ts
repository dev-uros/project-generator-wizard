import {useAuthStore} from "src/modules/auth/store";
import {Cookies} from "quasar";
import useAttemptAutoLogin from "src/modules/shared/utils/attemptAutoLogin";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default function auth ({ next }) {

  const userStore = useAuthStore();
  const userSessionTokenExists = Cookies.has('userSessionToken');


  if (!userSessionTokenExists) {
    console.log('treba da baci na login')
    return next({
      name: 'login'
    })
  }
  const attemptAutoLogin = async () => {
    const shouldAutoLogin = await useAttemptAutoLogin();
    if(shouldAutoLogin){
      return next();
    }else{
      return next({name: 'login'})
    }
  };
  if (userSessionTokenExists && Object.keys(userStore.user).length === 0) {
    attemptAutoLogin();
  }else{
    return next();
  }

}
