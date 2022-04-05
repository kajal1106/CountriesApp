
import Link from 'next/link';
import React from 'react';
import { addCommaToNumber } from '../../utils/addCommaToNumbers.utils';

import styles from './CountryCard.module.scss';
type CountryCardProps = {
  country: any;
}

const CountryCard : React.FC<CountryCardProps> = props => {
  console.log(props.country);
  
  return (
    <div className={styles.CountryCard}>
      <Link as={`/countries/${props.country.name.common}`} href={`/countries/${props.country.name.common}`}>
        <a href={`/countries/${props.country.name.common}`}>
      
          <div className={styles.CountryCardInner}>
            <header>
              <div className={styles.CountryCardFlag} >
                <img src={props.country.flags.svg} alt={props.country.name.common} />
                <span className={styles.CountryRegionTag}>{props.country.region}</span>
              </div>
              {/* <div className={styles.CountryCardFlag}>
            <Image
              src={props.country.flags.svg}
              alt={props.country.name.common}
              width={400}
              height={300}
            />
            <span className={styles.CountryRegionTag}>{props.country.region}</span>

          </div> */}
            </header>
            
            <div className={styles.CountryCardInfo}>
              <div className={styles.CountryCardInfoHeading}>
                <h2 className={styles.CountryName}>{props.country.name.common}</h2>     
                <span>{props.country.flag}</span>
              </div>
              <p><strong>Capital: </strong> {props.country.capital}</p>
              <p><strong>Population: </strong>{addCommaToNumber(props.country.population)}</p>
              <p><strong>Time Zone: </strong>{props.country.timezones[0]}</p>
              {/* <iframe src={props.country.maps[0]} ></iframe> */}
            </div>
          </div>
        
        </a>
      </Link>
    </div>
  );
}

export default CountryCard;