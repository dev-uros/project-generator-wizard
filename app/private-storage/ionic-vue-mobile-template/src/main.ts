import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import {IonicVue, isPlatform} from '@ionic/vue';
import {EdgeToEdge} from '@capawesome/capacitor-android-edge-to-edge-support';
import {StatusBar, Style} from '@capacitor/status-bar';
import {createPinia} from "pinia";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import {useAppStore} from "@/store/appStore";

const pinia = createPinia()

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(pinia);


router.isReady().then(async () => {
    const appStore = useAppStore();
    await appStore.initApp();
    if (isPlatform('android')) {
        await EdgeToEdge.enable();
        await EdgeToEdge.setBackgroundColor({color: '#ffffff'});
        await StatusBar.setStyle({style: Style.Light});
    }

    app.mount('#app');
});
