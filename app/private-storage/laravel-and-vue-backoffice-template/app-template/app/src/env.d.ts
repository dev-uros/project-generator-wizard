declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    APP_NAME: string;
    APP_ENV: 'local' | 'production';
    APP_URL: string;
    BACKEND_APP_BASE_URL: string;
    WEBSOCKET_SERVER: boolean
  }
}
