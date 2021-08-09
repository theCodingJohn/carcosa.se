import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';

import styles from './styles.module.css';

const Logo = ({ ...props }) => {
  const {
    navbar: { logo },
  } = useThemeConfig();
  const logoImageUrl = useBaseUrl('img/carcosa-black.svg');

  return (
    <div className={clsx('navbar__brand', styles.navbarLogo)} {...props}>
      {logoImageUrl !== null && (
        <>
          <img className="navbar__logo" src={logoImageUrl} alt={logo.alt} />
        </>
      )}
    </div>
  );
};

export default Logo;
