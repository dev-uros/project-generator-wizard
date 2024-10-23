import {useUsersStore} from "../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default async function setupUserDetailsPage ({ to, next }) {

  const userStore = useUsersStore();

  await userStore.showUserDetails(to.params.id);

  return next();
}
