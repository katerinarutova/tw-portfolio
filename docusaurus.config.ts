import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'RutovaDocs',
  tagline: 'API docs • Upgrade guides • Release notes',
  url: 'https://tw-portfolio-rutova.vercel.app', // až budeš nasazovat
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'monthly',
          priority: 0.7,
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'boxing-api-v1',
            spec: './static/spec/openapi.yaml',      // ve static/spec/
            route: '/api',                  // v1 reference
          },
        ],
        theme: {
          primaryColor: '#1f4aa8',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RutovaDocs',
      items: [
        {
          to: '/docs/projects/overview',
          label: 'Projects',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'API Reference',
          position: 'left',
          items: [
            {
              label: 'Boxing API v1',
              to: '/api',
            },
          ],
        },
        {
          to: '/about',
          label: 'About',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {label: 'LinkedIn', href: 'https://linkedin.com/in/katerinarutova'},
            {label: 'Instagram', href: 'https://instagram.com/katerinarutovaphoto'},
            {label: 'GitHub', href: 'https://github.com/katerinarutova'},
            {label: 'Email', href: 'mailto:rutovadocs@gmail.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Katerina Rutova. Built with <a href="https://docusaurus.io" target="_blank">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    image: 'img/og-cover.jpg',
    metadata: [
      {
        name: 'description',
        content:
          'Portfolio of Katerina Rutova — API technical writer specializing in API documentation, information architecture, release notes, and modern doc tooling.',
      },
      {
        name: 'keywords',
        content:
          'technical writer, technical writing, api documentation, release notes, information architecture, documentation engineer, tech writing portfolio',
      },
    ],
  },
};

export default config;
