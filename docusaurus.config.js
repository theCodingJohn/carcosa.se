const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Carcosa R&D',
  tagline: 'Venture Time Firm through software development',
  url: 'https://carcosa.se',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'carcosa-rnd', // Usually your GitHub org/user name.
  projectName: 'carcosa.se', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Roboto&family=Open+Sans&display=swap',
    'https://cdn.rawgit.com/luizbills/feather-icon-font/v4.7.0/dist/feather.css',
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-620HYRKFLB',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    announcementBar: {
      id: 'hirig', // Any value that will identify this message.
      content: 'We are hiring, <a href="/docs/hiring/developer">read more</a>',
      backgroundColor: '#001524', // Defaults to `#fff`.
      textColor: '#fff', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Carcosa Logo',
        src: 'img/carcosa-black.svg',
      },
      hideOnScroll: false,
      items: [],
    },
    footer: {
      style: 'light',
      logo: {
        src: 'img/navigation/logo.svg',
      },
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'About us',
              to: 'docs/intro',
            },
            {
              label: 'Values',
              to: 'docs/handbook/values',
            },
            {
              label: 'Contact us',
              to: 'docs/contact-us',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  customFields: {
    sections: {
      features: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/carcosa-rnd/carcosa.se/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/carcosa-rnd/carcosa.se/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
