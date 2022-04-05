import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import AppNavBar from "../../components/AppNavBar/AppNavBar";
import styles from '../../styles/SingleCountry.module.scss';
import cardStyles from "../../components/CountryCard/CountryCard.module.scss";
import IconBack from "../../components/Icon/IconBack";
import { addCommaToNumber } from "../../utils/addCommaToNumbers.utils";
import { CountryData } from "../../types/base.types";
import { ReactNode } from "react";
import GoogleMap from "../../components/GoogleMaps/GoogleMap";

type CountryPageProps = {
  country: CountryData,
  borders: CountryData[],
  children?: ReactNode
}
const Country: NextPage<CountryPageProps> = (props) => {
  const dismiss = () => {
    window.history.back();
  }
  const router = useRouter();
  const googleMapsData : googleMapsDataType[] = [];
  props.borders.map((borderCountry : CountryData, index) => {
    googleMapsData.push({name : borderCountry.name.common, latlng : borderCountry.latlng!, flagUri : borderCountry.flags.svg});
  })
    console.log(props);
    return (       
      <div className={`${[styles.PageCountrySingle]} ${[styles.AnimateEntry]}`}>
        <AppNavBar />
        <div className={styles.container}>
          <div onClick={router.back} className={styles.BackButton}>
            <Link as={"/countries"} href={"/countries"}>
              <a href={"/countries"} className={styles.BackButtonLink}>
                <IconBack /> Back
              </a>
            </Link>
          </div>
          <div className={`${[styles.PageCountrySingleInfo]} ${[styles.AnimateEntry]}`}>
            <div className={styles.CountryCardFlag} >
              <img src={props.country.flags.svg} alt={props.country.name.common} /> 
              <span className={cardStyles.CountryRegionTag}>{props.country.region}</span>
            </div>
            <div className={`${[styles.SingleCountryContent]} ${[styles.AnimateEntry]}`}>
              <header>
                <h1 className={`${[cardStyles.CountryName]} ${[styles.CountryName]}`}>{props.country.name.official}</h1>
                <p>{props.country.flag}</p>
              </header>
              <div className={`${[styles.CountryDetails]} ${[styles.AnimateEntry]}`}>
                <p><strong>Capital: </strong> {props.country.capital}</p>
                <p><strong>Currency: </strong> {props.country.currencies?.name}
                {Object.keys(props.country.currencies!).map((key, value) => 
                    <span key={value}>{props.country.currencies![key].name}</span>
                  )
                }
                </p>
                <p><strong>Population: </strong>{addCommaToNumber(props.country.population)}</p>
                <p><strong>Region: </strong>{props.country.region}</p>
                <p><strong>Sub-region: </strong>{props.country.subregion}</p>
                <p><strong>Languages: </strong>
                  {Object.keys(props.country.languages!).map((key, value) => 
                    <span key={value}>{props.country.languages![key]}</span>
                  )
                }
                </p>
                <p><strong>Time Zone: </strong>{props.country.timezones}</p>                
                {props.country.tld && <p><strong>Top Level Domain: </strong>
                  {props.country.tld.map((tld, id) =>
                  <span key={id}>{tld}</span>
                   )}
                </p>}
              </div>
            </div>
          </div>
          {props.borders &&
          <div className={`${[styles.BorderCountries]} ${[styles.AnimateEntry]}`}>
            <h2>Border Countries</h2>
            <GoogleMap centerCountryData={{name: props.country.name.common, latlng: props.country.latlng!, flagUri: props.country.flags.svg}} googleMapsData={googleMapsData}/>
          </div>}
        </div>
      </div>
    )
    }
    
export default Country;
export async function getStaticPaths() {
    const res = await fetch('https://restcountries.com/v3/all');
    const countries = await res.json();
    const paths = countries.map((country : CountryData) => ({
      params: {
        name: country.name.common
      }
    }));
    return {
      paths,
      fallback: 'blocking'
    }
}

  export const getStaticProps : GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${params?.name}?fields=flag,flags,name,nativeName,latlng,population,region,subregion,capital,tld,currencies,languages,borders,timezones`);
    const country : CountryData = (await res.json())[0];
    let query = [];    
    if(country.borders!.length > 0){
      for (const neighbor of country.borders!) {
        query.push(neighbor)
    }
    const resN = await fetch("https://restcountries.com/v3.1/alpha/?codes=" + query.join(","))
    const bordersData : CountryData[]= await resN.json()
    let neighbors = [];
    if (bordersData.length > 0) {
        for (let neighbor of bordersData) {
            neighbors.push({ parent: params?.code, cca2: neighbor.cca2, name: {official: neighbor.name.official} })
        }
    }   
    return {
      props: {
        country,
        borders: bordersData
      }
    }
    }
    return {
      props: {
        country,
      }
    }
  }