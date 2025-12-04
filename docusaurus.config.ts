import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'RutovaDocs',
  tagline: 'API docs • Upgrade guides • Release notes',
  url: 'https://your-domain.example', // až budeš nasazovat
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

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
          {
            id: 'boxing-api-v2',
            spec: './static/spec/openapi_v2.yaml',   // ve static/spec/
            route: '/api-v2',               // v2 reference
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
            {
              label: 'Boxing API v2',
              to: '/api-v2',
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
          title: 'Work',
          items: [
            {label: 'Projects', to: '/docs/projects/overview'},
          ],
        },
        {
          title: 'Find me',
          items: [
            {label: 'LinkedIn', href: 'https://linkedin.com/in/katerinarutova'},
            {label: 'Instagram', href: 'https://instagram.com/katerinarutovaphoto'},
            {label: 'GitHub', href: 'https://github.com/katerinarutova'},
            {label: 'Email', href: 'mailto:katerina.rutova@gmail.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Katerina Rutova`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    image: 'img/og-cover.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'technical writing, api documentation, release notes, upgrade guide',
      },
    ],
  },
};

export default config;
