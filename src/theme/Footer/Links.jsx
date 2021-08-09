import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import FooterLink from './FooterLink';

const Links = ({ links }) => {
  if (!links || links.length <= 0) {
    return null;
  }

  return (
    <div className="row footer__links">
      {links.map((linkItem, i) => (
        <div key={i} className="col footer__col">
          {linkItem.title !== null ? <h4 className="footer__title">{linkItem.title}</h4> : null}
          {linkItem.items !== null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? (
            <ul className={clsx('footer__items', styles.footerAdditional)}>
              {linkItem.items.map((item, key) =>
                item.html ? (
                  <li
                    key={key}
                    className={clsx('footer__item')}
                    dangerouslySetInnerHTML={{
                      __html: item.html,
                    }}
                  />
                ) : (
                  <li key={item.href || item.to} className="footer__item">
                    <FooterLink {...item} />
                  </li>
                )
              )}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Links;
