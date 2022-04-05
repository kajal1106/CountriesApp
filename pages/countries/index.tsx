import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import CountryCard from '../../components/CountryCard/CountryCard';
import PageHeader from '../../components/PageHeader/PageHeader';
import styles from '../../styles/Home.module.scss'
import { CountryData } from '../../types/base.types';

type HomePageProps = {
  countries: CountryData[],
}
const Home: NextPage<HomePageProps> = (props) => {
  const [filteredCountries, setFilteredCountries] = useState(props.countries);
  const [regionValue, setRegionValue] = useState('');
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 2500)
  },[]);
  const filterBasedOnRegion = (value:string) => {
    // const value = event.target.value;
    setRegionValue(value);
    if(value === '') {
      setFilteredCountries(props.countries);
    }
    else{
      const filteredCountries = props.countries.filter(country => country.region === value);
      setFilteredCountries(filteredCountries);
    }
  };

  const InputOnChange = (value:string) => {
    if(value === '') {
      setFilteredCountries(props.countries);
    }
    else{
      console.log(value);
      const filteredCountries = props.countries.filter(country => country.name.common.toLowerCase().includes(value));
      setFilteredCountries(filteredCountries);
    }
  }
  return (
    <main>
      <div className={`${[styles.pageSection]} ${[styles.PageCountryIndex]}`}>
        <div className={styles.container}>
          <AppNavBar />
          {isLoading && <div className={styles.loading}><div></div></div>}
          {!isLoading && <>
            <PageHeader filterByInput={InputOnChange} filterRegion={filterBasedOnRegion} />
            <div className={`${[styles.PageCountryIndexContent]} ${[styles.grid1]} ${[styles.AnimateEntry]}`}>
              {filteredCountries.map((country:any, index:any) => 
                <>
                  <CountryCard country={country} key={index}/>
                </>
              )}
            </div>
          </>}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  try {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries : CountryData[] = await res.json();
  if(!res)
  return { notFound: true };

  return {
    props: {
      countries
    }
  }
} catch (e) {
  return { notFound: true };
}
}
export default Home
