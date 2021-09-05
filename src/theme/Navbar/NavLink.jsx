import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const NavLink = ({ to, href = '', label, prependBaseUrlToHref = false, icon, ...props }) => {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            isNavLink: true,
            to: toUrl,
          })}
      {...props}
    >
      <span className={clsx(styles.navbarItemIcon, icon)} />
      <span className={styles.navbarItemLabel}>{label}</span>
    </Link>
  );
};

export default NavLink;
