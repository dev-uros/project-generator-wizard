<script lang="ts" setup>
import DockerFolderOpened from "~/components/icons/DockerFolderOpened.vue";
import DockerFolderClosed from "~/components/icons/DockerFolderClosed.vue";
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
import NginxFolderClosed from "~/components/icons/NginxFolderClosed.vue";
import NginxFolderOpened from "~/components/icons/NginxFolderOpened.vue";
import PhpFolderClosed from "~/components/icons/PhpFolderClosed.vue";
import PhpFolderOpened from "~/components/icons/PhpFolderOpened.vue";
import HtmlFileClosed from "~/components/icons/HtmlFileClosed.vue";
import HtmlFileOpened from "~/components/icons/HtmlFileOpened.vue";
import ConfigFileClosed from "~/components/icons/ConfigFileClosed.vue";
import ConfigFileOpened from "~/components/icons/ConfigFileOpened.vue";
import NginxFileOpened from "~/components/icons/NginxFileOpened.vue";
import DatabaseFolderClosed from "~/components/icons/DatabaseFolderClosed.vue";
import DatabaseFolderOpened from "~/components/icons/DatabaseFolderOpened.vue";
import LocaleFolderClosed from "~/components/icons/LocaleFolderClosed.vue";
import LocaleFolderOpened from "~/components/icons/LocaleFolderOpened.vue";
import RoutesFolderClosed from "~/components/icons/RoutesFolderClosed.vue";
import RoutesFolderOpened from "~/components/icons/RoutesFolderOpened.vue";
import TestsFolderClosed from "~/components/icons/TestsFolderClosed.vue";
import TestsFolderOpened from "~/components/icons/TestsFolderOpened.vue";
import LaravelFileClosed from "~/components/icons/LaravelFileClosed.vue";
import LaravelFileOpened from "~/components/icons/LaravelFileOpened.vue";
import ComposerFileClosed from "~/components/icons/ComposerFileClosed.vue";
import ComposerFileOpened from "~/components/icons/ComposerFileOpened.vue";
import NpmFileClosed from "~/components/icons/NpmFileClosed.vue";
import NpmFileOpened from "~/components/icons/NpmFileOpened.vue";
import PhpUnitFileClosed from "~/components/icons/PhpUnitFileClosed.vue";
import PhpUnitFileOpened from "~/components/icons/PhpUnitFileOpened.vue";
import ViteFileClosed from "~/components/icons/ViteFileClosed.vue";
import ViteFileOpened from "~/components/icons/ViteFileOpened.vue";
import PhpFileClosed from "~/components/icons/PhpFileClosed.vue";
import PhpFileOpened from "~/components/icons/PhpFileOpened.vue";
import PublicFolderClosed from "~/components/icons/PublicFolderClosed.vue";
import PublicFolderOpened from "~/components/icons/PublicFolderOpened.vue";
import JsonFileOpened from "~/components/icons/JsonFileOpened.vue";
import JsonFileClosed from "~/components/icons/JsonFileClosed.vue";
import ApacheFileClosed from "~/components/icons/ApacheFileClosed.vue";
import ApacheFileOpened from "~/components/icons/ApacheFileOpened.vue";
import FaviconFileOpened from "~/components/icons/FaviconFileOpened.vue";
import FaviconFileClosed from "~/components/icons/FaviconFileClosed.vue";
import RobotsFileOpened from "~/components/icons/RobotsFileOpened.vue";
import RobotsFileClosed from "~/components/icons/RobotsFileClosed.vue";
import CssFolderOpened from "~/components/icons/CssFolderOpened.vue";
import CssFolderClosed from "~/components/icons/CssFolderClosed.vue";
import JsFolderOpened from "~/components/icons/JsFolderOpened.vue";
import JsFolderClosed from "~/components/icons/JsFolderClosed.vue";
import ViewFolderOpened from "~/components/icons/ViewFolderOpened.vue";
import ViewFolderClosed from "~/components/icons/ViewFolderClosed.vue";
import CssFileOpened from "~/components/icons/CssFileOpened.vue";
import CssFileClosed from "~/components/icons/CssFileClosed.vue";
import JsFileOpened from "~/components/icons/JsFileOpened.vue";
import JsFileClosed from "~/components/icons/JsFileClosed.vue";
import BladeFileOpened from "~/components/icons/BladeFileOpened.vue";
import BladeFileClosed from "~/components/icons/BladeFileClosed.vue";
import PostmanFolderOpened from "~/components/icons/PostmanFolderOpened.vue";
import PostmanFolderClosed from "~/components/icons/PostmanFolderClosed.vue";
import NginxFileClosed from "~/components/icons/NginxFileClosed.vue";
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
    iconOpened: DotenvFileOpened,
    label: '.env.docker',
    content: 'Env file containing frontend container name'
  },
  {
    iconClosed: DotenvFileClosed,
    iconOpened: DotenvFileOpened,
    iconOpened: DotenvFileOpened,
    label: '.env.local',
    content: 'Env file which contains env variables for local development, so main .env file can easily be setup with make env NAME=local command, which copies all data from this file into .env file inside of src folder',
  },
  {
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
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

const srcAppFolder = [
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

const srcBootstrapFolder = [
  {
    label: 'cache',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-bootstrap-cache-folder'
  },
  {
    label: 'app.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  }
]

const srcBootstrapCacheFolder = [
  {
    label: '.gitignore',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    disabled: true
  },
  {
    label: 'packages.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'services.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  }
]

const srcConfigFolder = [
  {
    label: 'app.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'auth.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'broadcasting.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'cache.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'cors.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'database.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'filesystems.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'frontend-app.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'hashing.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'logging.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'mail.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'queue.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'sanctum.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'services.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'session.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'view.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  }
]

const srcDatabaseFolder = [
  {
    label: 'factories',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-database-factories-folder'
  },
  {
    label: 'migrations',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-database-migrations-folder'
  },
  {
    label: 'seeders',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-database-seeders-folder'
  },
  {
    label: '.gitignore',
    iconClosed: GitFileClosed,
    iconOpened: GitFileOpened,
    disabled: true
  }
]

const srcLangFolder = [
  {
    label: 'en',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-lang-en-folder'
  },
  {
    label: 'sr-latn.json',
    iconOpened: JsonFileOpened,
    iconClosed: JsonFileClosed,
    content: 'Serbian localisation for password validation'
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


const srcResourcesFolder = [
  {
    label: 'css',
    iconOpened: CssFolderOpened,
    iconClosed: CssFolderClosed,
    slot: 'src-resources-css-folder'
  },
  {
    label: 'js',
    iconOpened: JsFolderOpened,
    iconClosed: JsFolderClosed,
    slot: 'src-resources-js-folder'
  },
  {
    label: 'stubs',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-resources-stubs-folder'
  },
  {
    label: 'views',
    iconOpened: ViewFolderOpened,
    iconClosed: ViewFolderClosed,
    slot: 'src-resources-views-folder'
  }
]

const srcRoutesFolder = [
  {
    label: 'api.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'This file contains all the api endpoints used by frontend app'
  },
  {
    label: 'channels.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    disabled: true
  },
  {
    label: 'console.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    disabled: true
  },
  {
    label: 'web.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    disabled: true
  }
]

const srcStorageFolder = [
  {
    label: 'app',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    disabled: true
  },
  {
    label: 'framework',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    disabled: true
  },
  {
    label: 'postman',
    iconOpened: PostmanFolderOpened,
    iconClosed: PostmanFolderClosed,
    slot: 'src-storage-postman-folder'
  }
]

const srcTestsFolder = [
  {
    label: 'Feature',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-storage-tests-feature-folder'
  },
  {
    label: 'Traits',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-storage-tests-traits-folder'
  },
  {
    label: 'Unit',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-storage-tests-unit-folder'
  },
  {
    label: 'CreatesApplication.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Laravel provided file for starting application for testing'
  },
  {
    label: 'TestCase.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Laravel provided file for setting up tests (define usage of transactions, migrations, etc..)'
  }
]
const srcTestsFeatureFolder = [
  {
    label: 'ActivateAccountTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for account activation functionality'
  },
  {
    label: 'AutoLoginTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for auto login functionality'
  },
  {
    label: 'ForgotPasswordTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for forgot password functionality'
  },
  {
    label: 'LoginTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for login functionality'
  },
  {
    label: 'LogoutTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for logout functionality'
  },
  {
    label: 'ManuallySendAccountActivationEmailTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for manually sending account activation email functionality'
  },
  {
    label: 'ResetPasswordTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for reset password functionality'
  },
  {
    label: 'SetSessionTimeOutPeriodTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for setting session timeout period functionality'
  },
  {
    label: 'SetUserAccountStatusTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for setting user account state functionality'
  },
  {
    label: 'UserIndexTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for users overview functionality'
  },
  {
    label: 'UserShowTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for detailed user overview functionality'
  },
  {
    label: 'UserStoreTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for store new user functionality'
  },
  {
    label: 'UserUpdateTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Test for update existing user functionality'
  }
]
const srcTestsTraitsFolder = [
  {
    label: 'ApiSignIn.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Utility trait for signing in user for testing'
  }
]
const srcTestsUnitFolder = [
  {
    label: 'ExampleTest.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Laravel provided example test for unit testing'
  }
]


const srcStoragePostmanFolder = [
  {
    label: 'Laravel Api Template.postman_collection.json',
    iconOpened: JsonFileOpened,
    iconClosed: JsonFileClosed,
    content: 'Collection of api endpoints that can be imported into postman'
  }
]

const srcResourcesCssFolder = [
  {
    label: 'app.css',
    iconOpened: CssFileOpened,
    iconClosed: CssFileClosed,
    content: 'Main css file'
  },

]

const srcResourcesJsFolder = [
  {
    label: 'app.js',
    iconOpened: JsFileOpened,
    iconClosed: JsFileClosed,
    disabled: true,
  },
  {
    label: 'bootstrap.js',
    iconOpened: JsFileOpened,
    iconClosed: JsFileClosed,
    disabled: true,
  }
]

const srcResourcesStubsFolder = [
  {
    label: 'interfaceStub.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Template used in php artisan make:interface command'
  },
  {
    label: 'RepositoryStub.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Template used in php artisan make:repository command'
  },
  {
    label: 'ServiceStub.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Template used in php artisan make:service command'
  },
  {
    label: 'TraitStub',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'Template used in php artisan make:trait command'
  }
]

const srcResourcesViewsFolder = [
  {
    label: 'mail',
    iconOpened: FolderIconOpened,
    iconClosed: FolderIconClosed,
    slot: 'src-resources-views-mail-folder'
  },
  // {
  //   label: 'vendor',
  //   iconOpened: FolderIconOpened,
  //   iconClosed: FolderIconClosed,
  //   slot: 'src-resources-views-vendor-folder'
  // },
  {
    label: 'welcome.blade.php',
    iconOpened: BladeFileOpened,
    iconClosed: BladeFileClosed,
    content: 'Default laravel welcome page'
  }
]

const srcResourcesViewsMailFolder = [
  {
    label: 'generate-forgot-password-mail.blade.php',
    iconOpened: BladeFileOpened,
    iconClosed: BladeFileClosed,
    content: 'Laravel blade template containing forgot password email'
  },
  {
    label: 'send-error-alert.blade.php',
    iconOpened: BladeFileOpened,
    iconClosed: BladeFileClosed,
    content: 'Laravel blade template containing server error details email'
  },
  {
    label: 'welcome-mail.blade.php',
    iconOpened: BladeFileOpened,
    iconClosed: BladeFileClosed,
    content: 'Laravel blade template containing welcome new user email'
  }
]

const srcLangEnFolder = [
  {
    label: 'auth.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'En localisation for auth validation messages'
  },
  {
    label: 'pagination.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'En localisation for pagination messages'
  },
  {
    label: 'passwords.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'En localisation for password messages'
  },
  {
    label: 'validation.php',
    iconOpened: PhpFileOpened,
    iconClosed: PhpFileClosed,
    content: 'En localisation for validation messages'
  }
]

const srcDatabaseFactoriesFolder = [
  {
    label: 'UserFactory.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Factory class that allows for easy dummy user creation'
  }
]

const srcDatabaseMigrationsFolder = [
  {
    label: 'create_users_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for users table creation'
  },
  {
    label: 'create_password_resets_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for password_resets table creation'
  },
  {
    label: 'create_failed_jobs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for failed_jobs table creation'
  },
  {
    label: 'create_personal_access_tokens_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for personal_access_tokens table creation'
  },
  {
    label: 'create_jobs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for jobs table creation'
  },
  {
    label: 'create_user_logs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for user_logs table creation'
  },
  {
    label: 'create_user_action_logs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for user_action_logs table creation'
  },
  {
    label: 'create_session_timeout_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for session_timeout table creation'
  },
  {
    label: 'create_routes_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for routes table creation'
  },
  {
    label: 'create_user_login_logs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for user_login_logs table creation'
  },
  {
    label: 'create_user_login_logs_table.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Migration for user_login_logs table creation'
  }
]

const srcDatabaseSeedersFolder = [
  {
    label: 'DatabaseSeeder.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Main database seeder class'
  }
]

const srcAppHttpFolder = [
  {
    label: 'Controllers',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-app-http-controllers-folder',
    content: 'The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.'
  },
  {
    label: 'Middleware',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-app-http-middleware-folder',
    content: 'The Cron directory can contain all of the invokable classes that can be used in task scheduler.'
  },
  {
    label: 'Requests',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-app-http-requests-folder',
    content: 'The Enum directory can contain all of your php enums.'
  },
  {
    label: 'Kernel.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'The Exceptions directory contains all of the custom exceptions for your application. These exceptions may be generated using the make:exception command.'
  }
]

const srcAppHttpControllersFolder = [
  {
    label: 'AuthController.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Controller that contains auth functionalities (login, logout, forgotPassword, resetPassword, activateAccount, autoLogin)'
  },
  {
    label: 'Controller.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Base controller class which all other controllers extend'
  },
  {
    label: 'LogViewerController.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Controller which provides two methods, one lists all the log folders, and the other log files within selected folder provided by previous method'
  },
  {
    label: 'SetSessionTimeoutPeriodController.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Controller which provides method to set needed inactivity time before user sanctum token is revoked'
  },
  {
    label: 'SetUserAccountState.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Controller which provides method to set user account state from active to inactive and vice-versa.'
  },
  {
    label: 'UserController.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Controller which provides CRUD method for users, as well as functionality to manually send user account activation email.'
  }
]

const srcAppHttpMiddlewareFolder = [
  {
    label: 'EnsureUserAccountIsActive.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Middleware that checks is user flagged as active or inactive in database, prevents inactive users that still have valid sanctum tokens from accessing endpoints.'
  },
  {
    label: 'EnsureUserAccountIsActive.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Middleware that checks is user flagged as active or inactive in database, prevents inactive users that still have valid sanctum tokens from accessing endpoints.'
  },
  {
    label: 'LogRequestResponseMiddleware.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Middleware which stores request/response data to folders in storage.'
  },
  {
    label: 'LogUserAction.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Middleware which stores user action in database. It stores route name, user id, user ip'
  }
]

const srcAppHttpRequestsFolder = [
  {
    label: 'ActivateAccountRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Activate account request data validation'
  },
  {
    label: 'ForgotPasswordRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Forgot password request data validation'
  },
  {
    label: 'LoginUserRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'User login request data validation'
  },
  {
    label: 'ResetPasswordRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Reset password request data validation'
  },
  {
    label: 'SetSessionTimeOutPeriodRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Set session timeout period request data validation'
  },
  {
    label: 'StoreUserRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Store new user request data validation'
  },
  {
    label: 'UpdateUserRequest.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Update user request data validation'
  }
]

const srcAppConsoleFolder = [
  {
    label: 'Commands',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    description: 'Folder that contains Laravel commands created by php artisan make:command command',
    slot: 'src-app-console-commands-folder'
  },
  {
    label: 'Kernel.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains schedule function where cron jobs can be called from.'
  }
];

const srcAppCronFolder = [
  {
    label: 'LogoutInactiveUser.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Invokable class, used in scheduler to periodically check for inactive users and delete their sanctum tokens from database.'
  }
]

const srcAppEnumFolder = [
  {
    label: 'NonLoggableRoutes.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'This file provides enum of routes that are not loggable by user action logger (since no user is logged in while they are being called)'
  }
]

const srcAppExceptionsFolder = [
  {
    label: 'Handler.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'The default handler currently sends application errors with its details to provided email addresses. (Only when environment is set to production)'
  }
]

const srcAppInterfacesFolder = [
  {
    label: 'PasswordResetRepositoryInterface.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Interfaces contains all the methods that are implemented in PasswordResetRepository.php'
  },
  {
    label: 'SessionTimeoutRepositoryInterface.php.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Interfaces contains all the methods that are implemented in SessionTimeoutRepository.php'
  },
  {
    label: 'UserLoginLogRepositoryInterface.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Interfaces contains all the methods that are implemented in UserLoginLogRepository.php'
  },
  {
    label: 'UserLogRepositoryInterface.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Interfaces contains all the methods that are implemented in UserLogRepository.php'
  },
  {
    label: 'UserRepositoryInterface.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Interfaces contains all the methods that are implemented in UserRepository.php'
  }
]

const srcAppJobsFolder = [
  {
    label: 'SendForgotPasswordMail.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Sends user forgot password email via queue'
  },
  {
    label: 'SendUserCreationEmail.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Sends user welcome email via queue'
  },
  {
    label: 'StoreUserAction.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Sends user action in database via queue'
  }
]

const srcAppMailFolder = [
  {
    label: 'ForgotPasswordMail.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'For sending forgot password email'
  },
  {
    label: 'SendErrorAlert.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'For sending server errors'
  },
  {
    label: 'WelcomeMail.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'For sending welcome new user email'
  },
]

const srcAppModelsFolder = [
  {
    label: 'PasswordReset.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents password_resets table model'
  },
  {
    label: 'RouteList.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents routes table model'
  },
  {
    label: 'SanctumToken.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents personal_access_tokens table model'
  },
  {
    label: 'SessionTimeout.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents session_timeout table model'
  },
  {
    label: 'User.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents users table model'
  },
  {
    label: 'UserActionLog.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents user_action_logs table model'
  },
  {
    label: 'UserLog.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents user_logs table model'
  },
  {
    label: 'UserLoginLog.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Represents user_login_logs table model'
  }

]

const srcAppNotificationsFolder = [
  {
    label: 'DatabaseApproachingMaxConnections.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Notification that triggers when database gets near maximum number of connections'
  }
]

const srcAppObserversFolder = [
  {
    label: 'UserObserver.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Observes create and update methods used on User model, and then stores data into user_logs table'
  }
]

const srcAppProvidersFolder = [
  {
    label: 'AppServiceProvider.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'AuthServiceProvider.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'BroadcastServiceProvider.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'EventServiceProvider.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  },
  {
    label: 'RouteServiceProvider.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    disabled: true
  }
]

const srcAppRepositoriesFolder = [
  {
    label: 'PasswordResetRepository.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains queries that use PasswordReset model'
  },
  {
    label: 'SessionTimeoutRepository.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains queries that use SessionTimeout model'
  },
  {
    label: 'UserLoginLogRepository.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains queries that use UserLoginLog model'
  },
  {
    label: 'UserLogRepository.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains queries that use UserLog model'
  },
  {
    label: 'UserRepository.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Contains queries that use User model'
  }
]

const srcAppRulesFolder = [
  {
    label: 'CheckUserPasswordResetToken.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Custom rule that checks password validity upon user reset password action'
  },
  {
    label: 'ValidateUserAccountActivationToken.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Custom rule that checks user account activation token upon account activation action'
  },
  {
    label: 'ValidateUserPassword.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Custom rule that checks password validity upon user login action'
  }
]

const srcAppTraitsFolder = [
  {
    label: 'ResponseWithHttpStatus.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Trait used for returning uniformed responses from controllers'
  },
  {
    label: 'SerializeDate.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Trait used in models to convert timestamp to server time zone'
  }
]

const srcAppServicesFolder = [
  {
    label: 'AuthService.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'AuthService contains all methods related to user authentication functionalities (login, forgotPassword, resetPassword, activateAccount, autoLogin)'
  },
  {
    label: 'StoreUserLoginLogService.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'StoreUserLoginLogService contains method for storing user login logs'
  },
  {
    label: 'UserService.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'UserService contains methods related to User model (create, update, manuallySendWelcomeMail)'
  }
]
const srcAppConsoleCommandsFolder = [
  {
    label: 'Make',
    iconClosed: FolderIconClosed,
    iconOpened: FolderIconOpened,
    slot: 'src-app-console-commands-make-folder'
  },
  {
    label: 'DatabaseBackup.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Php artisan command for creating database backups'
  },
  {
    label: 'DeployScript.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Php artisan command for running laravel clear/create cache on deployment'
  },
  {
    label: 'GenerateRoutes.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Php artisan command for storing routes (based on their route name) in database, important to run when new routes are created, because logs and user actions are logged based on api routes '
  }
]

const srcAppConsoleCommandsMakeFolder = [
  {
    label: 'MakeInterfaceCommand.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'This laravel backend uses repository pattern, and php artisan make:interface command is used within php artisan make:repository command for automatic interface file creation'
  },
  {
    label: 'MakeRepositoryCommand.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'This laravel backend uses repository pattern. Command php artisan make:repository MyRepository creates repository class in repositories folder and interface in interfaces folder ' +
        '(example: php artisan make:repository MyRepository creates MyRepository.php file in repositories which implements MyRepositoryInterface, and creates MyRepositoryInterface.php file in interfaces folder)'
  },
  {
    label: 'MakeServiceCommand.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'This laravel backend uses service pattern where business logic is implemented in service class. Command php artisan make:service ServiceName creates service class in services folder.' +
        'For example php artisan make:service MyService creates MyService.php file in services folder'
  },
  {
    label: 'MakeTraitCommand.php',
    iconClosed: PhpFileClosed,
    iconOpened: PhpFileOpened,
    content: 'Php artisan command for making traits. For example php artisan make:trait MyTrait creates MyTrait.php file in traits folder'
  }
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
                :items="srcAppFolder"
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

              <template #src-app-console-folder>
                The Console directory contains all of the custom Artisan commands for your application. These commands may
                be generated using the make:command command.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppConsoleFolder">
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

                  <template #src-app-console-commands-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcAppConsoleCommandsFolder">
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

                      <template #src-app-console-commands-make-folder>
                        <UAccordion
                            class="pl-5"
                            multiple
                            variant="ghost"
                            :items="srcAppConsoleCommandsMakeFolder">
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
              <template #src-app-cron-folder>
                Here you can put invokable classes that will be used in scheduler.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppCronFolder"
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
              <template #src-app-enum-folder>
                Here you can put enums used in the application.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppEnumFolder"
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
              <template #src-app-exceptions-folder>
                The Exceptions directory contains all of the custom exceptions for your application. These exceptions may
                be generated using the make:exception command.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppExceptionsFolder"
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
              <template #src-app-http-folder>
                The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to
                handle requests entering your application will be placed in this directory.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppHttpFolder"

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

                  <template #src-app-http-controllers-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcAppHttpControllersFolder"

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
                  <template #src-app-http-middleware-folder>
                    Besides Laravel's default middlewares, the following are also provided (and used in project)
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcAppHttpMiddlewareFolder"

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
                  <template #src-app-http-requests-folder>
                    <UAccordion
                        class="pl-5"
                        multiple
                        variant="ghost"
                        :items="srcAppHttpRequestsFolder"

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
              <template #src-app-interfaces-folder>
                The Interfaces directory contains all interfaces that repositories implement
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppInterfacesFolder"

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
              <template #src-app-jobs-folder>
                The Jobs directory contains all job classes created by php artisan make:job command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppJobsFolder"

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
              <template #src-app-mail-folder>
                The Mail directory contains all mailable classes created by php artisan make:mail command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppMailFolder"

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
              <template #src-app-models-folder>
                The Models directory contains all model classes that represent database tables created by php artisan
                make:model command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppModelsFolder"

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
              <template #src-app-notifications-folder>
                The Notifications directory contains all notification classes created by php artisan make:notification
                command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppNotificationsFolder"

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
              <template #src-app-observers-folder>
                The Observers directory contains all observer classes that observe model actions, created by php artisan
                make:observer command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppObserversFolder"

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
              <template #src-app-providers-folder>
                The Providers directory contains all of the service providers for your application. Service providers
                bootstrap your application by binding services in the service container, registering events, or performing
                any other tasks to prepare your application for incoming requests.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppProvidersFolder"

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
              <template #src-app-repositories-folder>
                Repositories contain queries based on their respective models
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppRepositoriesFolder"

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
              <template #src-app-rules-folder>
                This directory does not exist by default, but will be created for you if you execute the make:rule Artisan
                command. The Rules directory contains the custom validation rule objects for your application. Rules are
                used to encapsulate complicated validation logic in a simple object.
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppRulesFolder"

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
              <template #src-app-services-folder>
                This directory contains all service classes created by php artisan make:service command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppServicesFolder"

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
              <template #src-app-traits-folder>
                This directory contains all traits created by php artisan make:trait command
                <UAccordion
                    class="pl-5"
                    multiple
                    variant="ghost"
                    :items="srcAppTraitsFolder"

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
