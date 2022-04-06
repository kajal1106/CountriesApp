export type CountryData = {
  id: number,
  name: {
    common: string,
    official: string,
  },
  capital: string,
  flag: string,
  flags: {
    png: string,
    svg: string
  },
  currencies?: {
    [key : string] : Currency 
  },
  tld?: string[],
  cca2?: string,
  ccn3? : string,
  cca3?: string,
  unMember?: boolean,
  region?: string,
  subregion?: string,
  continents?: string[],
  languages?: {
    [key:string]: string
  },
  latlng?: number[],
  area?: number,
  population: number,
  timezones?: string[],
  borders?: string[],
}

export type Currency = {
  name: string,
  symbol: string
}

export type googleMapsDataType = {
  name: string; 
  latlng: number[]; 
  flagUri: string;
  cca2: string; 
}