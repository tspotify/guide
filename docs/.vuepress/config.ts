import { defineUserConfig } from 'vuepress-vite'
import { description } from '../../package.json';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: '@vuepress/vite',
  lang: 'en-US',
  title: 'TSpotify Guide',
  description: description,

  bundlerConfig: {
    // vite bundler options
  },
})
