import React from 'react';

import styles from './navbaricon.module.scss';

interface NavbarIconProps {
  size?: number;
  open: boolean;
}

const NavbarIcon = ({ size = 200, open }: NavbarIconProps): JSX.Element => {
  const width = size;
  const height = size * 0.7026;
  return (
    <div style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={!open ? styles.svgOpen : styles.svgClosed}
      >
        <rect className={styles.rect1} />
        <rect className={styles.rect2} />
        <rect className={styles.rect3} />
        <rect className={styles.rect4} />
        <rect className={styles.rect5} />
        <rect className={styles.rect6} />
        <rect className={styles.rect7} />
      </svg>
    </div>
  );
};

export default NavbarIcon;
