
import React, { useState } from 'react';
import { REGIONS } from '../../constants';
import IconSearch from '../Icon/IconSearch';
import IconUp from '../Icon/IconUp';
import styles from './PageHeader.module.scss';

type PageHeaderProps = {
  filterRegion?: (arg0 : string) => void,
  filterByInput?: (arg0 : string) => void,
  sortCountries?: (arg0 : React.ChangeEvent<HTMLSelectElement>) => void,
}

const PageHeader : React.FC<PageHeaderProps> = props => {

  return (
    <div className={styles.PageHeader}>
      <div className={styles.filterCountries__container}>

        <div className={styles.filterCountries}>
          <h3>Filter country by Region:</h3>
          <div className={styles.categoryTags}>
            {REGIONS.map((region, i) => (
              <a data-cy-region={region} className={styles.filterLocationButtons}
                key={`region-${i}`}
                onClick={() => props.filterRegion!(region)}
                >
                {region}
                </a>
            ))}          
          </div>
        </div>

        <div className={styles.sortSelect}>
          <select is="sort-booking" onChange={(e) => props.sortCountries!(e)}>
            <option value="A">Sort:</option>
            <option value="PopulationAsc">Population: Low to High</option>
            <option value="PopulationDesc">Population: High to Low</option>
            <option value="AreaAsc">Area: Low to High</option>
            <option value="AreaDesc">Area: High to Low</option>
          </select>
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.40039 15.2466L8.20039 19.2466L15.0004 15.2466" stroke="#171C29" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;