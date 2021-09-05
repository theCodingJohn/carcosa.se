import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import styles from './styles.module.css';

const SocialMedia = ({ config }) => {
  return (
    <div style={{ paddingTop: '2.5%' }}>
      {config.map((media, idx) => (
        <Link
          key={idx}
          style={{ textDecoration: 'none' }}
          {...(media.href
            ? {
                target: '_blank',
                rel: 'noopener noreferrer',
                href: media.href,
              }
            : {
                to: media.to,
              })}
        >
          {media.icon !== undefined && <i className={clsx(styles.icon, media.icon)} />}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
