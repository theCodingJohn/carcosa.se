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
    image: 'img/docs/landing-page.png', // SEO image for Twitter card, etc.
    colorMode: {
      disableSwitch: true,
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-620HYRKFLB',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content: 'We are hiring, <a href="/docs/hiring/backend-developer">read more</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    navbar: {
      //title: 'Venture Time Firm',
      logo: {
        alt: 'Carcosa Logo',
        src: 'img/carcosa-black.svg',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        src: 'img/navigation/logo.svg',
      },
      links: [
        /*{
          title: 'About',
          items: [
            {
              label: 'What is Clutch?',
              to: 'docs/about/what-is-clutch',
            },
            {
              label: 'Roadmap',
              to: 'docs/about/roadmap',
            },
            {
              label: 'Architecture',
              to: 'docs/about/architecture',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carcosa R&D AB`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  customFields: {
    tagDescription: 'An extensible platform for infrastructure management.',
    sections: {
      features: {
        title: 'Why Clutch?',
      },
      demo: {
        lines: ["Don't take our word for it.", 'See what Clutch has to offer.'],
        cta: {
          text: 'Workflows & Components',
          link: 'docs/intro',
        },
      },
      consolidation: {
        snippets: [
          `
            Stop putting your team through an endless stream of high-friction tools and user interfaces.
            Clutch allows you to combine many tools into one, in the form that your developers use most.
          `,
          `
            We grow with you. Clutches extensible platform means you can integrate as many tools as
            you need, even if they are specific to you.
          `,
        ],
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/carcosa/carcosa-rnd/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/carcosa/carcosa-rnd/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
