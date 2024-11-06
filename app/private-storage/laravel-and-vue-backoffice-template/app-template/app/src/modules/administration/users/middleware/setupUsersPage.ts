import {AccountState} from "src/modules/administration/users/types";
import {useUsersStore} from "../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default async function setupUsersPage ({ next }) {

  const userStore = useUsersStore();

  await userStore.getUserList(AccountState.ALL);

  return next();
}
