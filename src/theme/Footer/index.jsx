import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';
import Logo from './Logo';
import Slope from './Slope';
import SocialMedia from './SocialMedia';
import Links from './Links';

var socialLinks = [
  {
    icon: 'fe fe-linkedin',
    href: 'https://www.linkedin.com/company/carcosa-rnd',
  },
  {
    icon: 'fe fe-github',
    href: 'https://github.com/carcosa-rnd',
  },
  {
    icon: 'fe fe-mail',
    href: 'mailto:info@carcosa.se',
  },
];

const Footer = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { footer } = themeConfig;
  const { links } = footer || {};

  return (
    <footer className={styles.footer}>
      <Slope />
      <div className={clsx('container', styles.container)}>
        <div className="container">
          <Logo />
          <SocialMedia config={socialLinks} />
        </div>
        <div className={clsx('container', styles.container)}>
          <Links links={links} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
