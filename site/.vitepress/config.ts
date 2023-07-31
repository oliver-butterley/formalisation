import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-GB',
  base: '/butterley/formalisation/',
  cleanUrls: true,
  assetsDir: 'static',
  title: "Formalisation in Rome",
  description: "A mini event for the formalisation of mathematics in Lean, Rome January 2024.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/oliver-butterley/formalisation/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Info', link: '/info' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oliver-butterley/formalisation' }
    ],

    footer: {
      message: 'Department of Mathematics, University of Rome Tor Vergata.',
      // copyright: 'Copyright © 2019-present Someone'
    },

    externalLinkIcon: true,

  }
})
