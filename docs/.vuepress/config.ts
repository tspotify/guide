import { defineUserConfig } from 'vuepress-vite'
import { description } from '../../package.json';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: '@vuepress/vite',
  lang: 'en-IN',
  title: 'TSpotify Guide',
  description: description,
  head: [
    ['meta', { property: 'og:title', content: 'TSpotify Guide' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/images/hero.png' }],
    ['meta', { property: 'og:locale', content: 'en_IN' }],
  ],

  bundlerConfig: {
    // vite bundler options
  },

  themeConfig: {
    docsRepo: 'https://github.com/tspotify/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Documentation',
        link: 'https://tspotify.github.io/tspotify'
      }
    ],
    repo: 'https://github.com/tspotify/guide',
    contributors: false,
    sidebar: {
      '/guide/': [
        {
          isGroup: true,
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md'
          ]
        }
      ]
    },
  }
})
