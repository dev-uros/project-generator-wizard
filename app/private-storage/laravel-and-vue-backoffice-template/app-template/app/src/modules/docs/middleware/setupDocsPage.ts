import {useDocsStore} from "../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default async function setupDocsPage({next}) {

  const store = useDocsStore();

  store.$reset();

  await store.exampleStoreFunction();

  return next();
}