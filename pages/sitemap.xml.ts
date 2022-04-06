import { CountryData } from "../types/base.types"

const EXTERNAL_DATA_URL = 'https://restcountries.com/v3.1/all'

function generateSiteMap(countries : CountryData[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://localhost:3000/countries</loc>
     </url>

     ${countries
       .map(({ cca2 }) => {
         return `
       <url>
           <loc>https://localhost:3000/countries/${cca2}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
}

export async function getServerSideProps({ res } : any) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL)
  const countries = await request.json()

  // We generate the XML sitemap with the countries data
  const sitemap = generateSiteMap(countries)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap