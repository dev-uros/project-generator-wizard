import {useLogsStore} from "../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default async function setupLogDetailsPage({next, to}) {
  const { folder, file, requestId } = to.params;

  const store = useLogsStore();

  store.$reset();

  await store.getApiLogEntryDetails(folder, file, requestId);

  return next();
}
