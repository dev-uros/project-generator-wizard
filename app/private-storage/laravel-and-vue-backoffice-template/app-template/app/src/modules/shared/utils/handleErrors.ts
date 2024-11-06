import useNotificationMessage from "./notificationMessage";

export default function useHandleErrors(
  errorCode: number,
  errors: {[p: string]: unknown},
) :boolean{
  console.log(errorCode);
  let shouldRedirectToLogin = false;
  if (errorCode === 500) {
    useNotificationMessage('error','Došlo je do greške, molimo pokušajte ponovo, molimo kontaktirajte IT podršku!')
  } else if (errorCode === 401) {
    useNotificationMessage('error','Istekla Vam je sesija, molimo ulogujte se ponovo!')
    shouldRedirectToLogin = true;
  } else if (errorCode === 422) {
    for (const [, value] of Object.entries(errors)) {
      Array(value).map(el=> {
        useNotificationMessage('error',String(el))
      })
    }
  }
  return shouldRedirectToLogin;
};
