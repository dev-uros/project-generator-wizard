import type {RouteRecordRaw} from "vue-router";

import auth from "../shared/middleware/auth";

import setupDocsPage from "./middleware/setupDocsPage"
import {h, onMounted, ref} from "vue";
import useNotificationMessage, {NotificationType} from "src/modules/shared/utils/notificationMessage";

export const docsRoutes: RouteRecordRaw[] = [
  {
    path: 'docs',
    component: {
      setup() {
        const iframeError = ref(false);
        const iframeSrc = ref('http://localhost:5173/');

        const handleIframeError = () => {
          iframeError.value = true; // Set the error state if iframe fails to load
        };

        onMounted(() => {
          // Optionally check if the URL is reachable before attempting to load the iframe
          fetch(iframeSrc.value)
            .then((response) => {
              if (!response.ok) {
                iframeError.value = true; // Mark as error if URL is not reachable
              }
            })
            .catch(() => {
              iframeError.value = true; // Handle fetch error
            });
        });

        return () => {
          if (iframeError.value) {
            useNotificationMessage(
              NotificationType.ERROR,
              'Trenutno nije moguće učitati dokumentaciju, molimo pokušajte kasnije'
            )
            return;
            // return h('div', {style: 'color: red;'}, 'Failed to load the document.');
          }

          return h('iframe', {
            src: iframeSrc.value,
            style: 'width: 100%; height: 90vh; border: none;',
            onError: handleIframeError,
          });
        };
      },

    },
    name: 'docs.index',
    meta: {middleware: [auth, setupDocsPage]}
  }
];
