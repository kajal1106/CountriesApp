
import Link from 'next/link';
import React from 'react';
import IconLogo from '../Icon/IconLogo';
import IconSearch from '../Icon/IconSearch';

import styles from './AppNavBar.module.scss';

type AppNavBarProps = {
  InputOnChange?: (arg0 : React.ChangeEvent<HTMLInputElement>) => void,
  isHomePage?: boolean
}
const AppNavBar : React.FC<AppNavBarProps> = props => {
  return (
    <div className={styles.AppNavBar}>
      <div className={styles.AppNavBarInner}>
        <Link href="/countries">
          <a className={styles.AppNavBarLogoLink}><IconLogo /></a>
        </Link>
        <div className={styles.input}>
         
          {props.isHomePage && <><input
            id="search-country"
            type="text"
            onChange={(e) => props?.InputOnChange!(e)}
            placeholder="Search for a country..."
            // onKeyPress={(e) => e.key === "Enter" && searchCountries()}
          />
          
            <IconSearch /></>
          }
        </div>
      </div>
    </div>
  );
}

export default AppNavBar;