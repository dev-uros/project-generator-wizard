import {useLogsStore} from "../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default async function setupLogsPage({next}) {

  const store = useLogsStore();

  store.$reset();

  await store.getApiLogFolderList();

  return next();
}
