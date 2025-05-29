# Random Names

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc1e27c9-e5eb-47fc-a459-cacbcf09421f/deploy-status)](https://app.netlify.com/sites/random-names/deploys)
[![CircleCI](https://circleci.com/gh/ayonious/random-names.svg?style=svg)](https://circleci.com/gh/ayonious/random-names)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ayonious/random-names)
[![codecov](https://codecov.io/gh/ayonious/random-names/branch/master/graph/badge.svg)](https://codecov.io/gh/ayonious/random-names)
[![Cypress Tests](https://github.com/ayonious/random-names/actions/workflows/cypress.yml/badge.svg)](https://github.com/ayonious/random-names/actions/workflows/cypress.yml)
[![tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Simple React app to show random names from different Regions

<p align="center">
  <img height="342px" width="auto" alt="Screenshot" src="https://cdn.jsdelivr.net/gh/ayonious/random-names@master/documentation/RandomNamesTutorial.2.gif">
</p>

## 🎁 See Deployed

https://random-names.netlify.app

## 🏡 Local Running instruction

```
yarn
yarn start
```

## 🧪 Run unit test

```
yarn start
yarn run unit-test
```

## 🏗 Run Cypress integration tests

One Command (to be run with headless browser and pr checker / ci-cd pipeline)

```
yarn test-integration
```

Two command (to see the results on nice UI) run in different tabs

```
yarn start
yarn cypress-web
```

## 🎥 Run Percy/Cypress integration tests and visual tests

One Command (to be run with headless browser and pr checker / ci-cd pipeline)

```
yarn test-integration-and-visual
```

Two command (to see the results on nice UI). run in different tabs

```
yarn start
yarn visual-test
```

## 🎓 Things I played around with

1. Simplest react app (raw webpack and babbel)
2. Typescript
3. material ui
4. State/Props/events
5. Deploy to Netlify
6. Creating CI in Travis to run tests during pr creation
7. Integration testing with cypress
8. Unit testing with React-testing-library

## 🚀 Deploy Yourself

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ayonious/random-names)
