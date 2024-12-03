---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '{{projectName}}'
  text: '{{projectName}} - Documentation'
  tagline: Short project description
  image:
    src: ./images/home.webp
    alt: My cool project
  actions:
    - theme: brand
      text: Docs
      link: /guide/
    - theme: alt
      text: Github
      link: https://github.com
      target: _blank

features:
  - title: Markdown
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🚀
    link: /guide/markdown/text-and-list
    linkText: Learn More about Markdown
  - title: Assets
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🛸
    link: /guide/assets/assets
    linkText: Learn More about Assets
  - title: Example Feature With Sub Menus
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon: 🖖
    link: /guide/example-feature/
    linkText: Learn More about Example Feature With Sub Menus
    target: _blank
---