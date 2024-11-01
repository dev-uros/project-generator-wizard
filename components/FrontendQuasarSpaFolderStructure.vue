<script lang="ts" setup>
import SrcFolderClosed from "~/components/icons/SrcFolderClosed.vue";
import SrcFolderOpened from "~/components/icons/SrcFolderOpened.vue";
import DotenvFileClosed from "~/components/icons/DotenvFileClosed.vue";
import DotenvFileOpened from "~/components/icons/DotenvFileOpened.vue";
import GitFileClosed from "~/components/icons/GitFileClosed.vue";
import GitFileOpened from "~/components/icons/GitFileOpened.vue";
import DockerFileClosed from "~/components/icons/DockerFileClosed.vue";
import DockerFileOpened from "~/components/icons/DockerFileOpened.vue";
import GnuFileClosed from "~/components/icons/GnuFileClosed.vue";
import GnuFileOpened from "~/components/icons/GnuFileOpened.vue";
import MarkdownFileClosed from "~/components/icons/MarkdownFileClosed.vue";
import MarkdownFileOpened from "~/components/icons/MarkdownFileOpened.vue";
import FolderIconClosed from "~/components/icons/FolderIconClosed.vue";
import FolderIconOpened from "~/components/icons/FolderIconOpened.vue";
import HtmlFileClosed from "~/components/icons/HtmlFileClosed.vue";
import HtmlFileOpened from "~/components/icons/HtmlFileOpened.vue";
import ConfigFileClosed from "~/components/icons/ConfigFileClosed.vue";
import ConfigFileOpened from "~/components/icons/ConfigFileOpened.vue";
import RoutesFolderClosed from "~/components/icons/RoutesFolderClosed.vue";
import RoutesFolderOpened from "~/components/icons/RoutesFolderOpened.vue";
import NpmFileClosed from "~/components/icons/NpmFileClosed.vue";
import NpmFileOpened from "~/components/icons/NpmFileOpened.vue";
import PublicFolderClosed from "~/components/icons/PublicFolderClosed.vue";
import PublicFolderOpened from "~/components/icons/PublicFolderOpened.vue";
import FaviconFileOpened from "~/components/icons/FaviconFileOpened.vue";
import FaviconFileClosed from "~/components/icons/FaviconFileClosed.vue";
import CssFolderOpened from "~/components/icons/CssFolderOpened.vue";
import CssFolderClosed from "~/components/icons/CssFolderClosed.vue";
import JsFileOpened from "~/components/icons/JsFileOpened.vue";
import JsFileClosed from "~/components/icons/JsFileClosed.vue";
import AppFolderClosed from "~/components/icons/AppFolderClosed.vue";
import AppFolderOpened from "~/components/icons/AppFolderOpened.vue";
import EslintFileClosed from "~/components/icons/EslintFileClosed.vue";
import EslintFileOpened from "~/components/icons/EslintFileOpened.vue";
import PrettierFileClosed from "~/components/icons/PrettierFileClosed.vue";
import PrettierFileOpened from "~/components/icons/PrettierFileOpened.vue";
import PostCssConfigFileClosed from "~/components/icons/PostCssConfigFileClosed.vue";
import PostCssConfigFileOpened from "~/components/icons/PostCssConfigFileOpened.vue";
import TsConfigFileClosed from "~/components/icons/TsConfigFileClosed.vue";
import TsConfigFileOpened from "~/components/icons/TsConfigFileOpened.vue";
import ImagesFolderOpened from "~/components/icons/ImagesFolderOpened.vue";
import ImagesFolderClosed from "~/components/icons/ImagesFolderClosed.vue";
import ImageFileOpened from "~/components/icons/ImageFileOpened.vue";
import ImageFileClosed from "~/components/icons/ImageFileClosed.vue";
import AssetsFolderClosed from "~/components/icons/AssetsFolderClosed.vue";
import AssetsFolderOpened from "~/components/icons/AssetsFolderOpened.vue";
import ModulesFolderClosed from "~/components/icons/ModulesFolderClosed.vue";
import ModulesFolderOpened from "~/components/icons/ModulesFolderOpened.vue";
import VueFileClosed from "~/components/icons/VueFileClosed.vue";
import VueFileOpened from "~/components/icons/VueFileOpened.vue";
import TsFileClosed from "~/components/icons/TsFileClosed.vue";
import TsFileOpened from "~/components/icons/TsFileOpened.vue";
import SvgFileClosed from "~/components/icons/SvgFileClosed.vue";
import SvgFileOpened from "~/components/icons/SvgFileOpened.vue";
import ScssFileClosed from "~/components/icons/ScssFileClosed.vue";
import ScssFileOpened from "~/components/icons/ScssFileOpened.vue";
import ComponentFolderClosed from "~/components/icons/ComponentFolderClosed.vue";
import ComponentFolderOpened from "~/components/icons/ComponentFolderOpened.vue";
import MiddlewareFolderClosed from "~/components/icons/MiddlewareFolderClosed.vue";
import MiddlewareFolderOpened from "~/components/icons/MiddlewareFolderOpened.vue";
import ServiceFolderClosed from "~/components/icons/ServiceFolderClosed.vue";
import ServiceFolderOpened from "~/components/icons/ServiceFolderOpened.vue";

const quasarProjectStructure = [
  {
    iconClosed: AppFolderClosed,
    iconOpened: AppFolderOpened,
    label: 'app',
    slot: 'app-folder'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    label: '.env.docker',
    content: 'Env file containing frontend container name'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    label: '.env.local',
    content: 'Env file which contains env variables for local development, so main .env file can easily be setup with make env NAME=local command, which copies all data from this file into .env file inside of src folder',
  },
  {
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    label: '.gitignore',
    content: 'Gitignore file for project'
  },
  {
    iconClosed: DockerFileClosed,
    iconOpened: DockerFileOpened,
    label: 'docker-compose.yml',
    content: 'Docker compose file'
  },
  {
    iconClosed: DockerFileClosed,
    iconOpened: DockerFileOpened,
    label: 'Dockerfile',
    content: 'Dockerfile'
  },
  {
    iconClosed: GnuFileClosed,
    iconOpened: GnuFileOpened,
    label: 'Makefile',
    content: 'Makefile containing commands'
  },
  {
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    label: 'README.md',
    content: 'Readme file containing instructions how to start project'
  },
]


const quasarAppFolder = [
  {
    label: 'src',
    iconClosed: SrcFolderClosed,
    iconOpened: SrcFolderOpened,
    slot: 'app-src-folder'
  },
  {
    label: 'public',
    iconClosed: PublicFolderClosed,
    iconOpened: PublicFolderOpened,
    slot: 'app-public-folder'
  },
  {
    label: '.editorconfig',
    iconClosed: ConfigFileClosed,
    iconOpened: ConfigFileOpened,
    content: 'Quasar provided basic editor config file'
  },
  {
    label: '.env',
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    content: 'Env file containing env variables for the application'
  },
  {
    label: '.eslintignore',
    iconClosed: EslintFileClosed,
    iconOpened: EslintFileOpened,
    content: 'Eslint ignore, generated by Quasar'
  },

  {
    label: 'eslintrc.cjs',
    iconClosed: EslintFileClosed,
    iconOpened: EslintFileOpened,
    content: 'Eslint file, generated by Quasar'
  },
  {
    label: 'eslintrc.js',
    iconClosed: EslintFileClosed,
    iconOpened: EslintFileOpened,
    content: 'Eslint file, generated by Quasar'
  },
  {
    label: '.gitignore',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    content: 'Gitignore file'
  },
  {
    label: '.npmrc',
    iconClosed: NpmFileClosed,
    iconOpened: NpmFileOpened,
    content: 'Npmrc file, containing pnpm options, generated by Quasar'
  },
  {
    label: '.prettierrc',
    iconClosed: PrettierFileClosed,
    iconOpened: PrettierFileOpened,
    content: 'Prettierrc file, containing pnpm options, generated by Quasar'
  },
  {
    label: 'index.html',
    iconClosed: HtmlFileClosed,
    iconOpened: HtmlFileOpened,
    content: 'Html entry point'
  },
  {
    label: 'package.json',
    iconClosed: NpmFileClosed,
    iconOpened: NpmFileOpened,
    content: 'Npm dependencies'
  },
  {
    label: 'package-lock.json',
    iconClosed: NpmFileClosed,
    iconOpened: NpmFileOpened,
    content: 'Npm lock file'
  },
  {
    label: 'postcss.config.cjs',
    iconClosed: PostCssConfigFileClosed,
    iconOpened: PostCssConfigFileOpened,
    content: 'Postcss config file, genrated by Quasar'
  },
  {
    label: 'quasar.config.js',
    iconClosed: JsFileClosed,
    iconOpened: JsFileOpened,
    content: 'Quasar config file'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Read me file'
  },
  {
    label: 'tsconfig.json',
    iconClosed: TsConfigFileClosed,
    iconOpened: TsConfigFileOpened,
    content: 'Typescript config file'
  }
]

const appSrcFolder = [
  {
    label: 'assets',
    iconClosed: AssetsFolderClosed,
    iconOpened: AssetsFolderOpened,
    slot: 'app-src-assets-folder',
  },
  {
    label: 'boot',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-boot-folder'
  },
  {
    label: 'css',
    iconClosed: CssFolderClosed,
    iconOpened: CssFolderOpened,
    slot: 'app-src-css-folder',
  },
  {
    label: 'layouts',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-layouts-folder',
  },
  {
    label: 'modules',
    iconClosed: ModulesFolderClosed,
    iconOpened: ModulesFolderOpened,
    slot: 'app-src-modules-folder'
  },
  {
    label: 'router',
    iconClosed: RoutesFolderClosed,
    iconOpened: RoutesFolderOpened,
    slot: 'app-src-routes-folder',
  },
  {
    label: 'stores',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-stores-folder',
  },
  {
    label: 'App.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'App vue entry point'
  },
  {
    label: 'env.d.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Quasar provided default env type file'
  },
  {
    label: 'global.d.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Quasar provided default global type file'
  },
  {
    label: 'quasar.d.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Quasar provided default quasar type file'
  },
  {
    label: 'shims-vue.d.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Quasar provided default shims-vue type file'
  }
]

const appSrcAssetsFolder = [
  {
    label: 'quasar-logo-vertical.svg',
    iconClosed: SvgFileClosed,
    iconOpened: SvgFileOpened,
    content: 'Quasar logo'
  }
]

const appSrcBootFolder = [
  {
    label: '.gitkeep',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    content: 'Gitkeep file'
  },
  {
    label: 'axios.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'This contains axios setup and exports api axios instance which is used to make api calls in project. Axios is setup with request/response interceptors and all error handling is centralized here.'
  }
]

const appSrcCssFolder = [
  {
    label: 'app.scss',
    iconClosed: ScssFileClosed,
    iconOpened: ScssFileOpened,
    content: 'App global css in SCSS form'
  },
  {
    label: 'quasar.variables.scss',
    iconClosed: ScssFileClosed,
    iconOpened: ScssFileOpened,
    content: 'Quasar SCSS (& Sass) Variables'
  },
]

const appSrcLayoutsFolder = [
  {
    label: 'auth',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-layouts-auth-folder'
  },
  {
    label: 'main',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-layouts-main-folder'
  },
]

const appSrcLayoutsAuthFolder = [
  {
    label: 'AuthLayout.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Layout for auth pages (login, reset password, activate account, forgot password)'
  }
]

const appSrcLayoutsMainFolder = [
  {
    label: 'MainLayout.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Main layout used for entire app'
  }
]

const appSrcModulesFolder = [
  {
    label: 'administration',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-folder'
  },
  {
    label: 'auth',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-auth-folder'
  },
  {
    label: 'home',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-home-folder'
  },
  {
    label: 'settings',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-settings-folder'
  },
  {
    label: 'shared',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-shared-folder'
  }
]

const appSrcModulesAdministrationFolder = [
  {
    label: 'logs',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-logs-folder'
  },
  {
    label: 'users',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-users-folder'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Routes exported by administration module'
  },
]

const appSrcModulesAdministrationLogsFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-administration-administration-logs-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-logs-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-administration-administration-logs-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-logs-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-administration-administration-logs-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-logs-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]

const appSrcModulesAdministrationLogsComponentsFolder = [
  {
    label: 'LogFiltersDialog.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Filter component for logs page'
  },
  {
    label: 'LogsItem.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Log list item component from the list of logs'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  }
]

const appSrcModulesAdministrationLogsComposablesFolder = [
  {
    label: 'logsComposable.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example composable function'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesAdministrationLogsMiddlewareFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  },
  {
    label: 'setupLogsPage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Middleware for logs page which calls api which fetches logs data'
  },
]

const appSrcModulesAdministrationLogsPagesFolder = [
  {
    label: 'LogsPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Logs page container component'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  },
]

const appSrcModulesAdministrationLogsServicesFolder = [
  {
    label: 'getLogDetails.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call to get details of a specific log'
  },
  {
    label: 'getLogs.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call to get list of logs'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  },
]

const appSrcModulesAdministrationLogsUtilsFolder = [
  {
    label: 'logUtils.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example of utility function'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
]

const appSrcModulesAdministrationUsersFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-administration-administration-users-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-users-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-administration-administration-users-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-users-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-administration-administration-users-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-administration-administration-users-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]

const appSrcModulesAdministrationUsersComponentsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  },
  {
    label: 'UserForm.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'User form component'
  },
  {
    label: 'UserPageFilters.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Filters for users overview component'
  },
  {
    label: 'UserStoreDialog.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Dialog component for storing user action'
  },
  {
    label: 'UserTable.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Component containing table for users overview'
  },
  {
    label: 'userTableColumns.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Typescript file containing table column definitions'
  },
]

const appSrcModulesAdministrationUsersComposablesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesAdministrationUsersMiddlewareFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  },
  {
    label: 'setupUserDetailsPage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Middleware that calls api for specific user data'
  },
  {
    label: 'setupUsersPage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Middleware that calls api that gets users list'
  },
]

const appSrcModulesAdministrationUsersPagesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  },
  {
    label: 'UserDetailsPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'User details container component'
  },
  {
    label: 'UserPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'User list container component'
  },

]

const appSrcModulesAdministrationUsersServicesFolder = [
  {
    label: 'getUsers.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call to get list of users'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  },
  {
    label: 'sendUserAccountActivationEmail.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call to get resend user account activation email'
  },
  {
    label: 'showUser.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that gets user details'
  },
  {
    label: 'storeUser.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that stores new user'
  },
  {
    label: 'updateUser.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that updates existing user'
  },

]

const appSrcModulesAdministrationUsersUtilsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
]

const appSrcModulesAuthFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-auth-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-auth-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-auth-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-auth-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-auth-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-auth-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]
//
const appSrcModulesAuthComponentsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  }
]

const appSrcModulesAuthComposablesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesAuthMiddlewareFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  },
  {
    label: 'setupAuthPage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example middleware function'
  }
]

const appSrcModulesAuthPagesFolder = [

  {
    label: 'ActivateAccountPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Activate account page component'
  },
  {
    label: 'ForgotPasswordPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Forgot password page component'
  },
  {
    label: 'LoginPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Login page component'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  },
  {
    label: 'ResetPasswordPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Reset password page component'
  },
]

const appSrcModulesAuthServicesFolder = [
  {
    label: 'activateAccountService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that allows user to activate his account'
  },
  {
    label: 'autoLoginService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that gets triggered when user opens app again to check is user token still valid'
  },
  {
    label: 'forgotPasswordService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that sends forgot password request'
  },
  {
    label: 'loginService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call for login'
  },
  {
    label: 'logoutService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that enables user to logout'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  },
  {
    label: 'resetPasswordService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Contains api call that enables user to reset his password'
  }
]

const appSrcModulesAuthUtilsFolder = [
  {
    label: 'authUtils.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example utility function'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
]
//
const appSrcModulesHomeFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-home-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-home-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-home-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-home-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-home-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-home-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]

//home details

const appSrcModulesHomeComponentsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  }
]

const appSrcModulesHomeComposablesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesHomeMiddlewareFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  },
  {
    label: 'setupHomePage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example middleware function'
  }
]

const appSrcModulesHomePagesFolder = [

  {
    label: 'HomePage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Home page container component'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  }
]

const appSrcModulesHomeServicesFolder = [
  {
    label: 'homeService.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example service function'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  }
]

const appSrcModulesHomeUtilsFolder = [
  {
    label: 'homeUtils.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Example utility function'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
]

//home details
const appSrcModulesSettingsFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-settings-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-settings-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-settings-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-settings-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-settings-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-settings-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]

//settings details

const appSrcModulesSettingsComponentsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  }
]

const appSrcModulesSettingsComposablesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesSettingsMiddlewareFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  }
]

const appSrcModulesSettingsPagesFolder = [

  {
    label: 'SettingsPage.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Settings page container component'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  }
]

const appSrcModulesSettingsServicesFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  },
  {
    label: 'updateSessionTimeOut.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Api call that updates current session time out in minutes'
  },
]

const appSrcModulesSettingsUtilsFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
]

//settings details


const appSrcModulesSharedFolder = [
  {
    label: 'components',
    iconClosed: ComponentFolderClosed,
    iconOpened: ComponentFolderOpened,
    slot: 'app-src-modules-shared-components-folder'
  },
  {
    label: 'composables',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-shared-composables-folder'
  },
  {
    label: 'middleware',
    iconClosed: MiddlewareFolderClosed,
    iconOpened: MiddlewareFolderOpened,
    slot: 'app-src-modules-shared-middleware-folder'
  },
  {
    label: 'pages',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-shared-pages-folder'
  },
  {
    label: 'services',
    iconClosed: ServiceFolderClosed,
    iconOpened: ServiceFolderOpened,
    slot: 'app-src-modules-shared-services-folder'
  },
  {
    label: 'utils',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'app-src-modules-shared-utils-folder'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme file containing module documentation'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module routes'
  },
  {
    label: 'store.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module store'
  },
  {
    label: 'types.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Module types'
  },
]

//shared details

const appSrcModulesSharedComponentsFolder = [
  {
    label: 'BaseBackButton.md',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Reusable component that provides back button to application'
  },
  {
    label: 'BaseHeader.md',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Reusable component that provides header to application'
  },
  {
    label: 'BaseTooltip.md',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Reusable component that provides tooltip to application'
  },
  {
    label: 'PageContainer.md',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Reusable component that provides basic page layout'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting components'
  }
]

const appSrcModulesSharedComposablesFolder = [
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting composables'
  }
]

const appSrcModulesSharedMiddlewareFolder = [
  {
    label: 'auth.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Middleware that checks is user logged in before entering page'
  },
  {
    label: 'guest.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Middleware that checks is user logged out before entering page'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting middlewares'
  }
]

const appSrcModulesSharedPagesFolder = [

  {
    label: 'ErrorNotFound.vue',
    iconClosed: VueFileClosed,
    iconOpened: VueFileOpened,
    content: 'Not found page'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting pages'
  }
]

const appSrcModulesSharedServicesFolder = [

  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting services'
  }
]

const appSrcModulesSharedUtilsFolder = [
  {
    label: 'attemptAutoLogin.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Function that inits auto login api call which checks is user token still valid'
  },
  {
    label: 'extractTimeFromTimestamp.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Returns hours:minutes from timestamp'
  },
  {
    label: 'fetch.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Defines useFetch function that is used to form api calls in conjunction with axios'
  },
  {
    label: 'handleErrors.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Handles errors from api calls'
  },
  {
    label: 'notificationMessage.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Defines useNotification to easily display toast messages'
  },
  {
    label: 'README.md',
    iconClosed: MarkdownFileClosed,
    iconOpened: MarkdownFileOpened,
    content: 'Readme me documenting utilities'
  },
  {
    label: 'routeRequiresAuth.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Defines set of routes which do not require auth'
  },
]

//shared details


const appSrcRouterFolder = [
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Initiates router with custom middleware pipeline'
  },
  {
    label: 'middlewarePipeline.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Enables route to have middleware key in meta which takes array of functions that are executed one after another, used to determine can user access certain page'
  },
  {
    label: 'routes.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Routes are placed in here'
  },
]

const appSrcStoresFolder = [
  {
    label: 'index.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Initiates pinia'
  },
  {
    label: 'store-flag.d.ts',
    iconClosed: TsFileClosed,
    iconOpened: TsFileOpened,
    content: 'Types file for store'
  }
]


const appPublicFolder = [
  {
    label: 'icons',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'app-public-icons-folder'
  },
  {
    label: 'images',
    iconOpened: ImagesFolderOpened,
    iconClosed: ImagesFolderClosed,
    slot: 'app-public-images-folder'
  },
  {
    label: 'favicon.ico',
    iconOpened: FaviconFileOpened,
    iconClosed: FaviconFileClosed,
    content: 'Setup your favicon'
  }
]

const appPublicIconsFolder = [
  {
    label: 'favicon-16x16.png',
    iconOpened: ImageFileOpened,
    iconClosed: ImageFileClosed,
    content: 'Favicon image in 16x16 size'
  },
  {
    label: 'favicon-32x32.png',
    iconOpened: ImageFileOpened,
    iconClosed: ImageFileClosed,
    content: 'Favicon image in 32x32 size'
  },
  {
    label: 'favicon-96x96.png',
    iconOpened: ImageFileOpened,
    iconClosed: ImageFileClosed,
    content: 'Favicon image in 96x96 size'
  },
  {
    label: 'favicon-128x128.png',
    iconOpened: ImageFileOpened,
    iconClosed: ImageFileClosed,
    content: 'Favicon image in 128x128 size'
  }
]

const appPublicImagesFolder = [
  {
    label: 'blank-image.jpg',
    iconOpened: ImageFileOpened,
    iconClosed: ImageFileClosed,
    content: 'Generic image used for login page'
  },
]

</script>

<template>
  <UCard>
    <template #header>
      Quasar spa
    </template>
    <UAccordion
        class="overflow-y-scroll max-h-96"
        multiple
        variant="ghost"
        :items="quasarProjectStructure"
    >
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost">
          <template #leading>
            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
              <component v-show="!open" :is="item.iconClosed"></component>
              <component v-show="open" :is="item.iconOpened"></component>

            </div>
          </template>

          <span class="truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
            />
          </template>


        </UButton>

      </template>

      <template #app-folder>
        <UAccordion
            class="pl-5"
            multiple
            variant="ghost"
            :items="quasarAppFolder"
        >
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost">
              <template #leading>
                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                  <component v-show="!open" :is="item.iconClosed"></component>
                  <component v-show="open" :is="item.iconOpened"></component>

                </div>
              </template>

              <span class="truncate">{{ item.label }}</span>

              <template #trailing>
                <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                />
              </template>


            </UButton>

          </template>

          <template #app-src-folder>
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appSrcFolder"
            >
              <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost">
                  <template #leading>
                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                      <component v-show="!open" :is="item.iconClosed"></component>
                      <component v-show="open" :is="item.iconOpened"></component>

                    </div>
                  </template>

                  <span class="truncate">{{ item.label }}</span>

                  <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                  </template>


                </UButton>

              </template>

              <template #app-src-assets-folder>
                Dynamic assets (processed by Vite)
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcAssetsFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                </UAccordion>
              </template>
              <template #app-src-boot-folder>
                Boot files (app initialization code)
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcBootFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                </UAccordion>
              </template>
              <template #app-src-css-folder>
                CSS/Sass/... files for your app
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcCssFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                </UAccordion>
              </template>
              <template #app-src-layouts-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcLayoutsFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                  <template #app-src-layouts-auth-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcLayoutsAuthFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>
                    </UAccordion>
                  </template>
                  <template #app-src-layouts-main-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcLayoutsMainFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>
                    </UAccordion>
                  </template>

                </UAccordion>
              </template>
              <template #app-src-modules-folder>
                The Console directory contains all of the custom Artisan commands for your application. These commands
                may
                be generated using the make:command command.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcModulesFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>


                  <template #app-src-modules-administration-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcModulesAdministrationFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                      <template #app-src-modules-administration-logs-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAdministrationLogsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>

                          <template #app-src-modules-administration-administration-logs-components-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsComponentsFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-logs-composables-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsComposablesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-logs-middleware-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsMiddlewareFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-logs-pages-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsPagesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-logs-services-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsServicesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-logs-utils-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationLogsUtilsFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>


                        </UAccordion>
                      </template>
                      <template #app-src-modules-administration-users-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAdministrationUsersFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>

                          <template #app-src-modules-administration-administration-users-components-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersComponentsFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-users-composables-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersComposablesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-users-middleware-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersMiddlewareFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-users-pages-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersPagesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-users-services-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersServicesFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                          <template #app-src-modules-administration-administration-users-utils-folder>
                            <UAccordion
                                class="pl-5"
                                multiple
                                variant="ghost"
                                :items="appSrcModulesAdministrationUsersUtilsFolder">
                              <template #default="{ item, index, open }">
                                <UButton color="gray" variant="ghost">
                                  <template #leading>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                      <component v-show="!open" :is="item.iconClosed"></component>
                                      <component v-show="open" :is="item.iconOpened"></component>

                                    </div>
                                  </template>

                                  <span class="truncate">{{ item.label }}</span>

                                  <template #trailing>
                                    <UIcon
                                        name="i-heroicons-chevron-right-20-solid"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                        :class="[open && 'rotate-90']"
                                    />
                                  </template>


                                </UButton>

                              </template>
                            </UAccordion>
                          </template>
                        </UAccordion>
                      </template>

                    </UAccordion>
                  </template>
                  <template #app-src-modules-auth-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcModulesAuthFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                      <template #app-src-modules-auth-components-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthComponentsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-auth-composables-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthComposablesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-auth-middleware-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthMiddlewareFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-auth-pages-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthPagesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-auth-services-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthServicesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-auth-utils-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesAuthUtilsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>

                    </UAccordion>
                  </template>
                  <template #app-src-modules-home-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcModulesHomeFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>


                      <template #app-src-modules-home-components-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomeComponentsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-home-composables-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomeComposablesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-home-middleware-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomeMiddlewareFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-home-pages-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomePagesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-home-services-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomeServicesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-home-utils-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesHomeUtilsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                    </UAccordion>
                  </template>
                  <template #app-src-modules-settings-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcModulesSettingsFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                      <template #app-src-modules-settings-components-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsComponentsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-settings-composables-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsComposablesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-settings-middleware-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsMiddlewareFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-settings-pages-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsPagesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-settings-services-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsServicesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-settings-utils-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSettingsUtilsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>

                    </UAccordion>
                  </template>
                  <template #app-src-modules-shared-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="appSrcModulesSharedFolder">
                      <template #default="{ item, index, open }">
                        <UButton color="gray" variant="ghost">
                          <template #leading>
                            <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                              <component v-show="!open" :is="item.iconClosed"></component>
                              <component v-show="open" :is="item.iconOpened"></component>

                            </div>
                          </template>

                          <span class="truncate">{{ item.label }}</span>

                          <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                          </template>


                        </UButton>

                      </template>

                      <template #app-src-modules-shared-components-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedComponentsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-shared-composables-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedComposablesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-shared-middleware-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedMiddlewareFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-shared-pages-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedPagesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-shared-services-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedServicesFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>
                      <template #app-src-modules-shared-utils-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="appSrcModulesSharedUtilsFolder">
                          <template #default="{ item, index, open }">
                            <UButton color="gray" variant="ghost">
                              <template #leading>
                                <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                                  <component v-show="!open" :is="item.iconClosed"></component>
                                  <component v-show="open" :is="item.iconOpened"></component>

                                </div>
                              </template>

                              <span class="truncate">{{ item.label }}</span>

                              <template #trailing>
                                <UIcon
                                    name="i-heroicons-chevron-right-20-solid"
                                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                    :class="[open && 'rotate-90']"
                                />
                              </template>


                            </UButton>

                          </template>
                        </UAccordion>
                      </template>

                    </UAccordion>
                  </template>

                </UAccordion>
              </template>
              <template #app-src-routes-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcRouterFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                </UAccordion>
              </template>
              <template #app-src-stores-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appSrcStoresFolder">
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>

                </UAccordion>
              </template>

            </UAccordion>
          </template>

          <template #app-public-folder>
            Pure static assets (directly copied)
            <UAccordion
                class="pl-5"
                multiple
                variant="ghost"
                :items="appPublicFolder"
            >
              <template #default="{ item, index, open }">
                <UButton color="gray" variant="ghost">
                  <template #leading>
                    <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                      <component v-show="!open" :is="item.iconClosed"></component>
                      <component v-show="open" :is="item.iconOpened"></component>

                    </div>
                  </template>

                  <span class="truncate">{{ item.label }}</span>

                  <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                  </template>


                </UButton>

              </template>

              <template #app-public-icons-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appPublicIconsFolder"
                >
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>
                </UAccordion>
              </template>
              <template #app-public-images-folder>
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="appPublicImagesFolder"
                >
                  <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost">
                      <template #leading>
                        <div class="w-6 h-6 rounded-full flex items-center justify-center -my-1">
                          <component v-show="!open" :is="item.iconClosed"></component>
                          <component v-show="open" :is="item.iconOpened"></component>

                        </div>
                      </template>

                      <span class="truncate">{{ item.label }}</span>

                      <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                      </template>


                    </UButton>

                  </template>
                </UAccordion>
              </template>

            </UAccordion>
          </template>


        </UAccordion>
      </template>
    </UAccordion>

  </UCard>

</template>

<style scoped></style>
