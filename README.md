

## Table of contents

  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Features](#features)
    - [Links](#links)
    - [Built with](#built-with)
    - [Installation guide](#installation-guide)
  - [Author](#author)

## Overview
 This web app is built in NextJs integrated with the REST Countries API to pull country data and display it.

### Features

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field in the Nabbar
- Filter  the list of countries by region tag
- Sort the countries by population and Area
- Click on a country to see more detailed information on a separate page
- See the border countries in google map on a single country page
- Hover on location marker to view the border country and click to know the details
- Fully responsive on desktop/tablet/mobile
- Cypress end to end Testing
- Added SEO - Referred SEO Documentation from the NextJs [Docs](https://nextjs.org/learn/seo/introduction-to-seo)


### Links

- Solution URL: [Click Here](https://github.com/kajal1106/CountriesApp)
- Live Site URL: [Click Here](https://countries-app-dun.vercel.app/countries)
- Code Sandbox URL: [Click Here](https://codesandbox.io/s/countries-app-zmq6jp)

## My process

### Built with

- Flexbox
- SCSS variables
- CSS Grid
- animation and transitions
- SVG
- Google Map Javascript API to show the map
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Cypress.io](https://www.cypress.io/) - Cypress Testing

###Installation Guide

## About 

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/kajal1106/CountriesApp.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/kajal1106/CountriesApp/blob/master/.env.local.example) over to '.env' and fill in the options) you can configure a range of options.


## Testing

The app uses Cypress for integration testing.

## Available NPM scripts

```
npm run cypress
```
Opens Cypress integrated testing environment.<br />
(Shortcut for `npx cypress open`)
> Please see `/cypress/README.md` for notes regarding Cypress integration tests.


## Author

- LinkedIn - [Kajal Singh](https://www.linkedin.com/in/singhkajal/)
