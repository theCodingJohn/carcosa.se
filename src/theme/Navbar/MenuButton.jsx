import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const MenuButton = ({ showSidebar }) => {
  return (
    <div
      aria-label="Navigation bar toggle"
      className={clsx('navbar__toggle', styles.navbarMenu)}
      role="button"
      tabIndex={0}
      onClick={showSidebar}
      onKeyDown={showSidebar}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        role="img"
        focusable="false"
      >
        <title>Menu</title>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </div>
  );
};

export default MenuButton;
