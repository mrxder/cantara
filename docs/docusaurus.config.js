module.exports = {
  title: 'Cantara',
  tagline:
    'Fullstack TypeScript React Apps in Minutes. Stop configuring, start coding.',
  url: 'https://cantara.js.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cantarajs', // Usually your GitHub org/user name.
  projectName: 'cantara', // Usually your repo name.
  baseUrl: '/', // The name of your GitHub project.
  projectName: 'cantara', // The name of your GitHub project. Same as above.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Cantara',
        src: 'img/cantara.svg',
      },
      links: [
        { to: 'docs/introduction', label: 'Getting started', position: 'left' },
        { to: 'docs/docs_intro', label: 'Docs', position: 'left' },
        {
          to: 'https://github.com/CantaraJS/cantara',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Getting started',
              to: 'docs/introduction',
            },
            {
              label: 'Docs',
              to: 'docs/docs_intro',
            },
            {
              label: 'Github',
              to: 'https://github.com/CantaraJS/cantara',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/CantaraJS/cantara/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
