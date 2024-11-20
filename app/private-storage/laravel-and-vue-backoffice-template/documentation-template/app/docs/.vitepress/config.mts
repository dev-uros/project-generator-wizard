import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "{{projectName}} - Dokumentacija",
  description: "Upustvo/Dokumentacija za korišćenje {{projectName}}",
  head: [['link', {rel: 'icon', href: '/icons/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/administration/users'}
    ],
    docFooter: {
      next: 'Sledeća',
      prev: 'Prethodna'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pretraži',
                buttonAriaLabel: 'Pretraga'
              },
              modal: {
                displayDetails: 'Detalji',
                resetButtonTitle: 'Obriši',
                backButtonTitle: 'Nazad',
                noResultsText: 'Nema rezultata',
                footer: {
                  selectText: 'Selektuj',
                  selectKeyAriaLabel: 'Selektuj',
                  navigateText: 'Navigiraj',
                  navigateUpKeyAriaLabel: 'Gore',
                  navigateDownKeyAriaLabel: 'Dole',
                  closeText: 'Zatvori',
                  closeKeyAriaLabel: 'Zatvori'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      label: 'Ovde'
    },
    sidebarMenuLabel: 'Meni',
    returnToTopLabel: 'Nazad na vrh',
    sidebar: [
      {
        collapsed: true,
        text: 'Administracija',

        items: [
          {
            text: 'Korisnici',
            link: '/administration/users'
          },
          {
            text: 'Aplikacija',
            collapsed: true,
            link: '/administration/application'
          }
        ]
      }
    ],

  }
})
