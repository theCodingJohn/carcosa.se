import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize from '@theme/hooks/useWindowSize';
import Logo from '@theme/Logo';

import styles from './styles.module.css';
import NavItem from './NavItem';
import MobileNavItem from './MobileNavItem';
import MenuButton from './MenuButton';

const DefaultNavItemPosition = 'right';

// items defined here instead of config so they can have an associated icon
const items = [
  {
    to: '/',
    icon: 'fe fe-home',
    label: 'Home',
  },
  {
    to: 'docs/intro',
    icon: 'fe fe-book',
    label: 'Docs',
  },
];

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
const splitLinks = (links) => {
  const leftLinks = links.filter(
    (linkItem) => (linkItem.position ?? DefaultNavItemPosition) === 'left'
  );
  const rightLinks = links.filter(
    (linkItem) => (linkItem.position ?? DefaultNavItemPosition) === 'right'
  );
  return {
    leftLinks,
    rightLinks,
  };
};

const Navbar = () => {
  const {
    siteConfig: {
      themeConfig: { navbar: { hideOnScroll = false } = {} },
    },
  } = useDocusaurusContext();
  const [sidebarShown, setSidebarShown] = useState(false);
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarShown);

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize === 'desktop') {
      setSidebarShown(false);
    }
  }, [windowSize]);

  const { leftLinks, rightLinks } = splitLinks(items);

  return (
    <nav
      ref={navbarRef}
      className={clsx('navbar', 'navbar--light', 'navbar--fixed-top', styles.navbarCustom, {
        'navbar-sidebar--show': sidebarShown,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          {!!items && items.length !== 0 && <MenuButton showSidebar={showSidebar} />}
          <div className={clsx('navbar__brand', styles.navbarLogoCustom)}>
            <Logo imageClassName={clsx('navbar__logo', styles.navbarLogoCustom)} />
          </div>
          {leftLinks.map((linkItem, i) => (
            <NavItem {...linkItem} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightLinks.map((linkItem, i) => (
            <NavItem {...linkItem} key={i} />
          ))}
        </div>
      </div>

      <div role="presentation" className="navbar-sidebar__backdrop" onClick={hideSidebar} />

      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <div className={clsx('navbar__brand', styles.navbarLogoCustom)} onClick={hideSidebar}>
            <img
              className={clsx('navbar__title', styles.navbarLogoTextCustom)}
              src={useBaseUrl('img/carcosa-white.svg')}
            />
          </div>
        </div>

        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((linkItem, i) => (
                <MobileNavItem {...linkItem} onClick={hideSidebar} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
