import {RouteRecordRaw} from "vue-router";
import {usersRoutes} from "./users/routes";
// import {logsRoutes} from "./logs/routes";



export const administrationRoutes: RouteRecordRaw[] = [
...usersRoutes,
// ...logsRoutes,
];
