# React, MUI and TypeScript Template

This template is intended to help you start a new `React SPA` project from scratch with a comprehensive folder structure, required dependencies, built-in configurations, example components and good practices for React Web Development. The project was bootstrapped with [Create React App](https://create-react-app.dev) following this [Tutorial](https://github.com/equisoide/react-mui-ts-steps). Below you will find some information about features on this template and how to perform common tasks.

## Supported Language Features
   This project supports a superset of the latest **JavaScript** standard. In addition to [ES6](http://es6-features.org) syntax features, it also supports:
   - [Exponentiation Operator](https://github.com/tc39/proposal-exponentiation-operator) (ES2016)
   - [Async/await](https://github.com/tc39/proposal-async-await) (ES2017)
   - [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018)
   - [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 4 proposal)
   - [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal)
   - [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html) and [TypeScript](https://www.typescriptlang.org)

## Core Libraries
- [React 18.2.0](https://reactjs.org) with `React Scripts 5.0.1`
- [MUI 5.8.4](https://mui.com) with `Emotion` styling engine, `Roboto Fonts` and `Google Material Icons`
- [TypeScript 4.7.3](https://www.typescriptlang.org) with [ES6](http://es6-features.org)
- [I18next 21.8.9](https://react.i18next.com) for internationalization

## Documentation Tools
- [Storybook 6.5.9](https://storybook.js.org) to document pages and components

## Code Quality & Performance
- [ESLint 8.17.0](https://eslint.org) with `Airbnb`, `TypeScript`, `React`, `React Hooks` and `Jest` configuration
- [Stylelint 14.9.1](https://stylelint.io) to analyse `CSS` files
- [Jest 27.5.2](https://jestjs.io/docs/getting-started) to test `JavaScript`/`TypeScript` files
- [React Testing Library 13.3.0](https://testing-library.com/docs/react-testing-library/intro) to test components
- [Web Vitals 2.1.4](https://web.dev/vitals) to meassure performance

## Built-in Settings
- [.editorconfig](https://editorconfig.org) settings to standardize charset, ending of lines and indentation
- [.vscode](https://code.visualstudio.com/docs/getstarted/settings) settings with integrated `Chrome Debugger`, faster search results and auto-format on save
- [Environment files](https://create-react-app.dev/docs/adding-custom-environment-variables) for `local`, `test`, `development`, `qa`, `staging` and `production`

## Environment Quick Setup

1. Install [NodeJs](https://nodejs.org/es/download)
2. Install [Git](https://git-scm.com/downloads)
3. Install [VS Code](https://code.visualstudio.com/download)
4. Install VS Code recomented extensions:
   * [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
   * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   * [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   * [Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
   * [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
   * [NpmIntellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
   * [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
   * [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
5. Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Google Chrome

## Running & Debugging the application for the first time

1. Clone repo:
   > `git clone https://github.com/equisoide/react-mui-ts-template.git`
2. Install all required packages (It will perform a [Clean install](https://docs.npmjs.com/cli/v8/commands/npm-ci)):
   > `npm run init`
3. Restart VS Code in order to refresh **TypeScript Intellisense**, otherwise you might see TypeScript errors in the editor
4. Start the application:
   > `npm start`
5. Start debugging in `VS Code` by pressing `F5` or by clicking on `Run and Debug` > `Green debug icon`
6. You can now set breakpoints, debug and inspect the React component hierarchies into the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Available Scripts
| Command           | Description                                      | Evironment File  |
| :---              | :---                                             | :---             |
| `npm run init`    | Installs all dependencies for the first time     | N/A              |
| `npm run lint`    | Analyses `JavaSript`/`TypeScript` code           | N/A              |
| `npm run lint:f`  | Try to fix `JavaSript`/`TypeScript` errors       | N/A              |
| `npm run lint:c`  | Analyses `CSS` files for potential errors        | N/A              |
| `npm test`        | Executes Unit Tests outputting to `out/coverage` | .env.test        |
| `npm start`       | Runs the App in http://localhost:3000            | .env.local       |
| `npm run build`   | Builds the App to `out/build/production`         | .env.production  |
| `npm run build:d` | Builds the App to `out/build/development`        | .env.development |
| `npm run build:l` | Builds the App to `out/build/local`              | .env.local       |
| `npm run build:q` | Builds the App to `out/build/qa`                 | .env.qa          |
| `npm run build:s` | Builds the App to `out/build/staging`            | .env.staging     |
| `npm run sbook`   | Runs Storybook in http://localhost:3001          | .env.local       |
| `npm run sbook:d` | Builds Storybook to `out/storybook/development`  | .env.development |
| `npm run sbook:l` | Builds Storybook to `out/storybook/local`        | .env.local       |
| `npm run sbook:p` | Builds Storybook to `out/storybook/production`   | .env.production  |
| `npm run sbook:q` | Builds Storybook to `out/storybook/qa`           | .env.qa          |
| `npm run sbook:s` | Builds Storybook to `out/storybook/staging`      | .env.staging     |

## Project Structure
```js
📦 my-app
├── 📜 .env           // Global variables common to all environments
├── 📜 .eslintrc      // ESLint configuration
├── 📜 .gitignore     // Folders and files ignored by Git
├── 📜 .stylelintrc   // Stylelint configuration
├── 📜 package.json   // Project dependencies, scripts and more
├── 📜 tsconfig.json  // TypeScript configuration
├── 📜 README.md      // Project documentation
├── 📂 .env-override
│   ├── 📜 .env.development // Environment variables for Development
│   ├── 📜 .env.local       // Environment variables for Local
│   ├── 📜 .env.production  // Environment variables for Production
│   ├── 📜 .env.qa          // Environment variables for QA
│   ├── 📜 .env.staging     // Environment variables for Staging
│   └── 📜 .env.test        // Environment variables for Unit Test
├── 📂 public
│   ├── 📜 index.html       // HTML where the React App is rendered
│   ├── 📜 favicon.ico      // The icon found in the URL address bar
│   ├── 📜 manifest.json    // Metadata used to install the PWA
│   ├── 📜 logo192.png      // PWA icon (192x192)
│   ├── 📜 logo512.png      // PWA icon (512x512)
│   └── 📜 robots.txt       // Instructions for search crawlers
└── 📂 src
    ├── 📜 index.tsx
    ├── 📂 components
    │   └── HelloWorld
    │       ├── 📜 index.stories.tsx
    │       ├── 📜 index.test.tsx
    │       └── 📜 index.tsx
    ├── 📂 lang
    │   ├── 📜 resources.en.json
    │   └── 📜 resources.es.json
    ├── 📂 styles
    │   ├── 📜 material-icons.css
    │   └── 📜 site.css
    └── 📂 util
        └── 📜 report-web-vitals.ts
```

## Using HTTPS in Development
You may require the dev server to serve pages over [HTTPS](https://create-react-app.dev/docs/using-https-in-development). To do this, set the `HTTPS` environment variable to `true` in the **.env.local** file, then start the dev server as usual with `npm start`.

Note that the server will use a self-signed certificate, so your web browser will display a warning upon accessing the page. To avoid this, you should create a local **Certificate Authority** and an **SSL certificate**, then set the `SSL_CERT_FILE` and `SSL_KEY_FILE` variables defined in **.env.local** to point to those files.

A simple way to generate the **SSL Certificate** is by using [mkcert](https://www.mariokandut.com/how-to-setup-https-ssl-in-localhost-react):
  - You need a package manager to install **mkcert**:
    - **MacOS**: Use Homebrew (`brew install mkcert`)
    - **Linux**: Use Certutil
    - **Windows**: Use Chocolatey
  - Install **mkcert**
  - Create a locally trusted CA with `mkcert -install`
  - Generate an SSL certificate with `mkcert localhost`

## Working guidelines
- Never delete and re-generate the `package-lock.json` file from scratch, it will break the App and Storybook! Let `npm` update that file every time you install a new dependency
- Create reusable components inside `src/components` folder. Define each component in its own folder with the following structure:
  ```js
    + src/components/MyComponent  // Component name in PascalCase
      - index.stories.tsx         // Storybook documentation
      - index.test.tsx            // Jest testing file
      - index.tsx                 // Component definition
  ```
- Prefer [Function Components](https://www.robinwieruch.de/react-function-component) over `Class components` they offer almost the same: `state` and `lifecycle methods`, with the plus they are more lightway, have a sophisticated `API` and require less code. With the introduction of `React Hooks` it's possible to write your entire application with just functions as `React components`:
    ```js
    import { Box, BoxProps } from '@mui/material';
    import { useTranslation } from 'react-i18next';

    export interface MyComponentProps {
      box?: BoxProps
    }

    function MyComponent({ box } : MyComponentProps) {
      const { t } = useTranslation();
      const boxProps = { ...MyComponent.defaultProps.box, ...box } as BoxProps;
      return (
        <Box {...boxProps}>
          {t('hello-world')}
        </Box>
      );
    }

    MyComponent.defaultProps = {
      box: {
        sx: { background: 'blue' },
      },
    };

    export default MyComponent;
    ```
- In general use [Trailing Commas](https://blog.logrocket.com/best-practices-using-trailing-commas-javascript) (Except on `JSON` files), many coding styles now recommend using them all the time because they make it easier to add new parameters to your functions or copy/paste properties in arrays and objects and also helps with producing cleaner diff output
- Add your own environment variables to the `.env-override/.env.local` file, this file should not be commited
- Before running or building this application always run linters and unit tests
- Linter is configured to accept valid ending of lines as `LF` (unix style), if you are on Windows, to avoid Git converting from `LF` to `CRLF`, run the following commands:
  ```shell
  git config --global core.autocrlf false
  git config --global core.eol lf
  ```

## Documentation & Training
- [Official React Documentation](https://es.reactjs.org)
- [React Function Components](https://www.robinwieruch.de/react-function-component)
- [TypeScript](https://www.typescriptlang.org)
- [ES6](http://es6-features.org/#Constants)
- [MUI Crash Course](https://www.youtube.com/watch?v=o1chMISeTC0)
- [MUI From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ)
- [MUI Components](https://mui.com/material-ui/react-autocomplete)
- [MUI Templates](https://mui.com/material-ui/getting-started/templates)

## Creator

**Juan Cuartas** https://twitter.com/juancuartas

## Copyright and license

Code and documentation released under [the MIT license](https://github.com/equisoide/react-mui-ts-template/blob/master/LICENSE)
