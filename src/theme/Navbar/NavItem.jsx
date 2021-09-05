import React from 'react';
import clsx from 'clsx';

import NavLink from './NavLink';

const NavItem = ({ items, position = 'right', className, ...props }) => {
  const navLinkClassNames = (extraClassName, isDropdownItem = false) =>
    clsx(
      {
        'navbar__item navbar__link': !isDropdownItem,
        'dropdown__link': isDropdownItem,
      },
      extraClassName
    );

  if (!items) {
    return <NavLink className={navLinkClassNames(className)} {...props} />;
  }

  return (
    <div
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--left': position === 'left',
        'dropdown--right': position === 'right',
      })}
    >
      <NavLink
        className={navLinkClassNames(className)}
        {...props}
        onClick={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.target.parentNode.classList.toggle('dropdown--show');
          }
        }}
      >
        {props.label}
      </NavLink>
      <ul className="dropdown__menu">
        {items.map(({ className: childItemClassName, ...childItemProps }, i) => (
          <li key={i}>
            <NavLink
              activeClassName="dropdown__link--active"
              className={navLinkClassNames(childItemClassName, true)}
              {...childItemProps}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
