import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

const FooterLink = ({ to, href, label, prependBaseUrlToHref, ...props }) => {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href);

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
};

export default FooterLink;
