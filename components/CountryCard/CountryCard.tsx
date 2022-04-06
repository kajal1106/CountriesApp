
import Link from 'next/link';
import React from 'react';
import { CountryData } from '../../types/base.types';
import { addCommaToNumber } from '../../utils/addCommaToNumbers.utils';

import styles from './CountryCard.module.scss';
type CountryCardProps = {
  country: CountryData;
}

const CountryCard : React.FC<CountryCardProps> = props => {  
  return (
    <div className={styles.CountryCard} data-country={props.country.name.common}>
      <Link as={`/countries/${props.country.cca2!.toLowerCase()}`} href={`/countries/${props.country.cca2!.toLowerCase()}`}>
        <a href={`/countries/${props.country.cca2!.toLowerCase()}`}>
      
          <div className={styles.CountryCardInner}>
            <header>
              <div className={styles.CountryCardFlag} >
                <img src={props.country.flags.svg} alt={props.country.name.common} />
                <span className={styles.CountryRegionTag}>{props.country.region}</span>
              </div>
            </header>
            
            <div className={styles.CountryCardInfo}>
              <div className={styles.CountryCardInfoHeading}>
                {props.country.name.common && <h2 data-cy={props.country.name.common} className={styles.CountryName}>{props.country.name.common}</h2>}     
                {props.country.flag && <span>{props.country.flag}</span>}
              </div>
              {props.country.capital.length > 0 && <p><strong>Capital: </strong> {props.country.capital}</p>}
              <p><strong>Population: </strong>{props.country.population && addCommaToNumber(props.country.population)}</p>
              {props.country.area && <p><strong>Area: </strong>{props.country.area}</p>}
            </div>
          </div>

        </a>
      </Link>
    </div>
  );
}

export default CountryCard;