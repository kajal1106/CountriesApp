import type { NextPage } from 'next'
import React from 'react';
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
  const [sortFilter, setSortFilter] = useState('');
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  },[]);
  const filterBasedOnRegion = (value:string) => {
    setRegionValue(value);
    if(value === '') {
      setFilteredCountries(props.countries);
    }
    else{
      const filteredCountries = props.countries.filter(country => country.region === value);
      setFilteredCountries(filteredCountries);
    }
  };

  const InputOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.value === '') {
      setFilteredCountries(props.countries);
    }
    else{
      const filteredCountries = props.countries.filter(country => country.name.common.toLowerCase().includes(e.currentTarget.value));
      setFilteredCountries(filteredCountries);
    }
  }
  const sortCountries = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const sortFilterOption = e.currentTarget.value;
    setSortFilter(sortFilterOption);
    if(sortFilterOption === 'PopulationAsc'){
      const sortedData = props.countries.sort((a,b) => {return (a.population - b.population)});
      setFilteredCountries(sortedData);
    }
    if(sortFilterOption === 'PopulationDesc'){
      const sortedData = props.countries.sort((a,b) => {return (b.population - a.population)});
      console.log(sortedData);
      setFilteredCountries(sortedData);
    }
    if(sortFilterOption === 'AreaAsc'){
      const sortedData = props.countries.sort((a,b) => a.area! - b.area!);
      setFilteredCountries(sortedData);
    }
    if(sortFilterOption === 'AreaDesc'){
      const sortedData = props.countries.sort((a,b) => b.area! - a.area!);
      setFilteredCountries(sortedData);
    }
  }
  return (
    <main>
      <div className={`${[styles.pageSection]} ${[styles.PageCountryIndex]}`}>
        <div className={styles.container}>
          <AppNavBar InputOnChange={InputOnChange} isHomePage/>
          {isLoading && <div className={styles.loading}><div></div></div>}
          {!isLoading && <>
            <PageHeader filterRegion={filterBasedOnRegion} sortCountries={sortCountries}/>
            <div className={`${[styles.PageCountryIndexContent]} ${[styles.grid1]} ${[styles.AnimateEntry]}`}>
              {filteredCountries.map((country:any, index:any) => 
                <React.Fragment key={index}>
                  <CountryCard country={country} key={index}/>
                </React.Fragment>
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
  const res = await fetch('https://restcountries.com/v3.1/all?fields=flag,flags,cca2,name,nativeName,population,region,capital,area');
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
