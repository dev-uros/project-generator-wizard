import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "{{projectName}}",
  description: "Upustvo/Dokumentacija za korišćenje {{projectName}}",
  head: [['link', {rel: 'icon', href: '/icons/favicon.ico'}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'Reference', link: '/reference/example'}

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
      label: 'Sekcija'
    },
    sidebarMenuLabel: 'Meni',
    returnToTopLabel: 'Nazad na vrh',
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          link: '/guide/'
        },
        {
          text: 'Markdown',
          collapsed: true,
          items: [
            {
              text: 'Text and Lists',
              link: '/guide/markdown/text-and-list',
            },
            {
              text: 'Container and Alert',
              link: '/guide/markdown/container-and-alert',
            },
            {
              text: 'Code Block',
              link: '/guide/markdown/code-block',
            }
          ]
        },
        {
          text: 'Assets',
          collapsed: true,
          items: [
            {
              text: 'Assets',
              link: '/guide/assets/assets',
            },
            {
              text: 'Public assets',
              link: '/guide/assets/public',
            },
          ]
        },
        {
          text: 'Example Feature With Sub Menus',
          collapsed: true,
          items: [
            {
              text: 'Lorem ipsum',
              link: '/guide/example-feature/',
            },
            {
              text: 'Sed at orci',
              link: '/guide/example-feature/sed-at-orci',
            },
            {
              text: 'Maecenas lobortis',
              collapsed: true,
              items: [
                {
                  text: 'Sub One',
                  link: '/guide/example-feature/maecenas-lobortis/sub-one',
                },
                {
                  text: 'Sub One',
                  link: '/guide/example-feature/maecenas-lobortis/sub-two',
                }
              ]

            }
          ]
        }
      ],
      '/reference': [
        {
          text: 'Ref Example',
          link: '/reference/example'
        }
      ]
    },

  }
})
