export type ICON_SET = {
  main: string
  secondary?: string
}

export const PROJECT_TYPES = [
  {
    value: 'backoffice',
    label: 'Backoffice',
    icon: 'material-symbols:admin-panel-settings-outline'
  },
  {
    value: 'website',
    label: 'Website',
    icon: 'streamline:programming-web-server-world-internet-earth-www-globe-worldwide-web-network'
  },
  {
    value: 'microservice',
    label: 'Micro Service',
    icon: 'carbon:gears'
  },
  {
    value: 'documentation',
    label: 'Documentation',
    icon: 'oui:documentation'
  },
  {
    value: 'desktop',
    label: 'Desktop',
    icon: 'material-symbols-light:desktop-windows-outline',
    disabled: true
  }
]

export type PROJECT_TYPE = {
  value: string
  label: string
  icon: string
}

export type FRONTEND_OPTION = {
  value: string
  label: string
  icons: ICON_SET[]
}
export type BACKEND_OPTION = {
  value: string
  label: string
  icons: ICON_SET[]
}
export const QUASAR_BADGE = {
  value: 'quasar',
  label: 'Vue/Quasar',
  icons: [
    {
      name: 'devicon:quasar'
    },
    {
      name: 'devicon:vuejs'
    }
  ]
}

export const ELECTRON_BADGE = {
  value: 'electron',
  label: 'Node/Electron',
  icons: [
    {
      name: 'devicon:nodejs'
    },
    {
      name: 'devicon:electron'
    }
  ]
}
export const LARAVEL_BADGE = {
  value: 'laravel',
  label: 'Php/Laravel',
  icons: [
    {
      name: 'devicon:laravel'
    },
    {
      name: 'devicon:php'
    }
  ]
}

export const ANGULAR_BADGE = {
  value: 'angular',
  label: 'Angular',
  icons: [
    {
      name: 'devicon:angular'
    }
  ],
  disabled: true
}

export const NUXT_BADGE = {
  value: 'nuxt',
  label: 'Nuxt/Daisy UI',
  icons: [
    {
      name: 'devicon:nuxtjs'
    },
    {
      name: 'logos:daisyui-icon'
    }
  ]
}

export const VITEPRESS_BADGE = {
  value: 'vitepress',
  label: 'VitePress',
  icons: [
    {
      name: 'simple-icons:vitepress'
    },
  ]
}
export const ASTRO_BADGE = {
  value: 'astro',
  label: 'Astro/Daisy UI',
  icons: [
    {
      name: 'devicon:astro'
    },
    {
      name: 'logos:daisyui-icon'
    }
  ],
  disabled: true
}

export const FASTIFY_BADGE = {
  value: 'fastify',
  label: 'Node/Fastify',
  icons: [
    {
      name: 'devicon:nodejs'
    },
    {
      name: 'devicon-plain:fastify'
    }
  ],
  disabled: true
}

export const FASTIFY_BADGE_ENABLED = {
  value: 'fastify',
  label: 'Node/Fastify',
  icons: [
    {
      name: 'devicon:nodejs'
    },
    {
      name: 'devicon-plain:fastify'
    }
  ]
}
export const NO_BACKEND_BADGE = {
  value: 'none',
  label: 'None',
  icons: [
    {
      name: 'fluent-emoji-high-contrast:no-entry'
    }
  ]
}

export const NO_FRONTEND_BADGE = {
  value: 'none',
  label: 'None',
  icons: [
    {
      name: 'fluent-emoji-high-contrast:no-entry'
    }
  ]
}

export const BACKOFFICE_FRONTENDS = [QUASAR_BADGE, ANGULAR_BADGE]

export const BACKOFFICE_QUASAR_BACKENDS = [LARAVEL_BADGE, FASTIFY_BADGE]

export const BACKOFFICE_ANGULAR_BACKENDS = [LARAVEL_BADGE]

export const WEBSITE_FRONTENDS = [NUXT_BADGE, ASTRO_BADGE]

export const WEBSITE_BACKENDS = [NO_BACKEND_BADGE]
export const DESKTOP_FRONTENDS = [QUASAR_BADGE]

export const MICROSERVICE_FRONTENDS = [NO_FRONTEND_BADGE]

export const DESKTOP_BACKENDS = [ELECTRON_BADGE]

export const MICROSERVICE_BACKENDS = [FASTIFY_BADGE_ENABLED]

export const DOCUMENTATION_FRONTENDS = [VITEPRESS_BADGE]
