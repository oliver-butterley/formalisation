import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-GB",
  base: "/butterley/formalisation/",
  cleanUrls: true,
  assetsDir: "static",
  title: "Computer-verified proofs: 48 hours in Rome",
  description:
    "A mini event concerning the formalisation of mathematics in Lean, Rome 24-26 January 2024.",
  lastUpdated: true,
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.png', type: 'image/png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern:
        "https://github.com/oliver-butterley/formalisation/edit/main/site/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Info", link: "/info" },
      { text: "Team", link: "/team" },
      { text: "Practicalities", link: "/practical" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/oliver-butterley/formalisation",
      },
    ],
    footer: {
      message: 'Department of Mathematics, University of Rome Tor Vergata.',
      // copyright: ''
    },
    externalLinkIcon: false,
  },
});