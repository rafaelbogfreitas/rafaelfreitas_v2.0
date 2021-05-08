/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import NavbarIcon from '../NavbarIcon';

import styles from './navbar.module.scss';

type MakeActiveParams = '/' | '/about' | '/projects' | '/contact';

const Navbar = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleIcon = (): void => {
      setOpen(window.innerWidth <= 500);
    };
    window.addEventListener('resize', toggleIcon, false);
    return () => window.removeEventListener('resize', toggleIcon);
  });

  const makeActive = (page: MakeActiveParams): string => {
    return router.pathname === page ? 'active' : '';
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.navbarLogo}
        src="/rf_logo.svg"
        alt="Rafael Freitas logo"
      />

      <div onClick={() => setOpen(!open)}>
        <NavbarIcon size={30} open={open} />
      </div>
      <ul
        className={`${styles.navItemsContainer} ${
          open ? styles.slideInRight : ''
        }`}
      >
        <li
          className={`${
            open
              ? `${styles.navItem} ${styles.navItemOpenTransition}`
              : styles.navItem
          } ${makeActive('/')}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            open
              ? `${styles.navItem} ${styles.navItemOpenTransition}`
              : styles.navItem
          } ${makeActive('/about')}`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${
            open
              ? `${styles.navItem} ${styles.navItemOpenTransition}`
              : styles.navItem
          } ${makeActive('/projects')}`}
        >
          <Link href="/about">Projects</Link>
        </li>
        <li
          className={`${
            open
              ? `${styles.navItem} ${styles.navItemOpenTransition}`
              : styles.navItem
          } ${makeActive('/contact')}`}
        >
          <Link href="/about">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
