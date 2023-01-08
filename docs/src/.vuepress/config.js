const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'klingl.me - developer documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'script',
      {
        async: true,
        defer: true,
        'data-website-id': 'bbda65eb-2754-4e4b-9f4b-cb1799a01cf0',
        src: 'https://umami.mrmonk.dev/umami.js',
        'data-domains': 'docs.klingl.me',
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Website',
        link: 'https://klingl.me',
      },
      {
        text: 'Github',
        link: 'https://github.com/klinglme',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'ring-klingl',
            'receive-ring',
            'manage-notifications',
            'web-client',
          ],
        },
        {
          title: 'Helpers',
          collapsable: false,
          children: ['utils/'],
        },
        {
          title: 'Examples',
          collapsable: false,
          children: [
            'examples/',
            'examples/arduino',
            'examples/node',
            'examples/python',
          ],
        },
        {
          title: 'Other',
          collapsable: false,
          children: ['other/'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://docs.klingl.me',
      },
    ],
  ],
};
