
import Link from 'next/link';
import React from 'react';
import IconLogo from '../Icon/IconLogo';
import IconSearch from '../Icon/IconSearch';

import styles from './AppNavBar.module.scss';


const AppNavBar : React.FC = props => {
  return (
    <div className={styles.AppNavBar}>
      <div className={styles.AppNavBarInner}>
        <Link href="/">
          <a className={styles.AppNavBarLogoLink}><IconLogo /></a>
        </Link>
        <div className={styles.input}>
         
          <input
            id="search-country"
            type="text"
            // onChange={(e) => props.filterByInput!(e.target.value)}
            placeholder="Search for a country..."
            // onKeyPress={(e) => e.key === "Enter" && searchCountries()}
          />
            <IconSearch />
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;