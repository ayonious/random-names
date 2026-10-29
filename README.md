# Random Names

Generate random names from different regions.

**[Try Random Names](https://ayonious.github.io/random-names/)**

<p align="center">
  <img height="342px" width="auto" alt="Random Names app preview" src="https://cdn.jsdelivr.net/gh/ayonious/random-names@master/documentation/RandomNamesTutorial.2.gif">
</p>

Open the app, choose a region, and discover names.

<details>
<summary>Technical details — development, testing, and deployment</summary>

### Project status

[![GitHub Pages Deploy](https://github.com/ayonious/random-names/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/ayonious/random-names/actions/workflows/gh-pages.yml)
[![CI](https://github.com/ayonious/random-names/workflows/CI/badge.svg)](https://github.com/ayonious/random-names/actions)
[![codecov](https://codecov.io/gh/ayonious/random-names/branch/master/graph/badge.svg)](https://codecov.io/gh/ayonious/random-names)
[![Cypress Tests](https://github.com/ayonious/random-names/actions/workflows/cypress.yml/badge.svg)](https://github.com/ayonious/random-names/actions/workflows/cypress.yml)

### Run locally

Install Node.js and Yarn, then run:

```sh
yarn install
yarn start
```

### Run unit tests

```sh
yarn unit-test
```

### Run integration tests

Start the app and run Cypress in a headless browser:

```sh
yarn test-integration
```

For the interactive Cypress runner, run these commands in separate terminals:

```sh
yarn start
yarn cypress-web
```

### Build

```sh
yarn build
```

The production files are generated in `dist/`.

### Deployment

The app is hosted on GitHub Pages. The [deployment workflow](.github/workflows/gh-pages.yml) installs dependencies, builds the app, and deploys `dist/` on pushes to `master`. It can also be run manually from the Actions tab. Unit tests run separately in the CI workflow.

To deploy your own fork, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. Push to `master` or run **GitHub Pages Deploy** from the Actions tab. The workflow reports the deployed site URL.

### Built with

- React and TypeScript
- Material UI and styled-components
- Webpack and Babel
- Jest, React Testing Library, and Cypress
- GitHub Actions and GitHub Pages

</details>
