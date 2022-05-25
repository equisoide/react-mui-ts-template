# React, MUI and TypeScript template

This template is intended to help you start a new `React SPA` project from scratch with a comprehensive folder structure, required dependencies, built-in configurations, common components and good practices for Web Development. The project was bootstrapped with [Create React App](https://create-react-app.dev). Below you will find some information on how to perform common tasks.

## Core Libraries
 - [React 18.1.0](https://reactjs.org) with `React Scripts 5.0.1`
 - [MUI 5.6.4](https://mui.com) with `Emotion` styling engine, `Roboto Fonts` and `Font Icons`
 - [TypeScript 4.6.4](https://www.typescriptlang.org) with [ES6](https://www.w3schools.com/js/js_es6.asp)
 - [I18next 11.16.9](https://react.i18next.com) for internationalization

 ## Documentation Tools
 - [Storybook 6.5.3](https://storybook.js.org) to document pages and components

 ## Code Quality & Performance
 - [ESLint 8.15.0](https://eslint.org) with `Airbnb`, `TypeScript`, `React`, `React Hooks` and `Jest` configuration
 - [Stylelint 14.8.2](https://stylelint.io) to analyse `CSS` files
 - [Jest 27.5.0](https://jestjs.io/docs/getting-started) to test `JavaScript`/`TypeScript` files
 - [React Testing Library 13.2.0](https://testing-library.com/docs/react-testing-library/intro) to test components
 - [Web Vitals 2.1.4](https://web.dev/vitals) to meassure performance

## Built-in Settings
 - [.editorconfig](https://editorconfig.org) settings to standardize charset, ending of lines and indentation
 - [.vscode](https://code.visualstudio.com/docs/getstarted/settings) settings with integrated `Chrome Debugger`, faster search results and auto-format on save
 - [Environment files](https://create-react-app.dev/docs/adding-custom-environment-variables) for `local`, `test`, `development`, `qa`, `staging` and `production`

## Environment Quick Setup

1. Install [NodeJs](https://nodejs.org/es/download/)
2. Install [Git](https://git-scm.com/downloads)
3. Install [VS Code](https://code.visualstudio.com/download)
4. Install VS Code useful extensions:
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

1. Clone repo: `git clone https://github.com/equisoide/react-mui-ts-template.git`
2. Install all required packages: `npm install`
3. Start the application: `npm start`
4. Start debugging in `VS Code` by pressing `F5` or by clicking on `Run and Debug` > `Green debug icon`
5. You can now set breakpoints, debug and inspect the React component hierarchies into the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Available Scripts
| Command             | Description                                                 | Evironment      |
| :---                | :---                                                        | :---            |
| `npm install`       | Installs all packages required for this project             | N/A             |
| `npm run build:dev` | Builds the app for `development` to the `build` folder      | env.development |
| `npm run build:loc` | Builds the app for `local` to the `build` folder            | env.local       |
| `npm run build:qa`  | Builds the app for `qa` to the `build` folder               | env.qa          |
| `npm run build:sbk` | Builds `Storybook` as a Static Web Application              | N/A             |
| `npm run build:stg` | Builds the app for `staging` to the `build` folder          | env.staging     |
| `npm run build`     | Builds the app for `production` to the `build` folder       | env.production  |
| `npm run lint:fix`  | Try to fix `JavaSript`/`TypeScript` errors                  | N/A             |
| `npm run lint`      | Analyses `JavaSript`/`TypeScript` code for potential errors | N/A             |
| `npm run storybook` | Runs `Storybook` in http://localhost:3001                   | N/A             |
| `npm run stylelint` | Analyses `CSS` files for potential errors                   | N/A             |
| `npm start`         | Runs the app in http://localhost:3000                       | env.local       |
| `npm test`          | Launches the test runner                                    | env.test        |

## Working guidelines
 - Create reusable components inside `src/components` folder. Define each component in its own folder with the following structure:
   ```js
    + src/components/MyComponent  // Component name in PascalCase
      - index.stories.tsx         // Storybook documentation
      - index.test.tsx            // Jest testing file
      - index.tsx                 // Component definition
   ```
 - Prefer [Function Components](https://www.robinwieruch.de/react-function-component/) over `Class components` they offer almost the same: `state` and `lifecycle methods`, with the plus they are more lightway, have a sophisticated `API` and require less code. With the introduction of `React Hooks` it's possible to write your entire application with just functions as `React components`:
   ```js
    function MyComponent() {
      return (
        <b>{t('hello_world')}</b> // Always use i18n for texts
      );
    }

    export default MyComponent;   // Prefer default export
   ```
 - Add your own environment variables to the `env/.env.local` file, this file should not be commited
 - Never let carrets on package versions. Incorrect: `"react": "^18.1.0"`, Correct: `"react": "18.1.0"`
 - Before running or building this application always run linters and unit tests
 - Linter is configured to accept valid ending of lines as `LF` (unix style), if you are on Windows, to avoid Git converting from `LF` to `CRLF`, run the following commands:
   ```shell
   git config --global core.autocrlf false
   git config --global core.eol lf
   ```

## Documentation & Training
 - [MUI Crash Course](https://www.youtube.com/watch?v=o1chMISeTC0/)
 - [MUI Components](https://mui.com/material-ui/react-autocomplete/)
 - [MUI Templates](https://mui.com/material-ui/getting-started/templates/)

 ## Tutorials that helped me to create this project
 - [Creating a React App from scratch 2022](https://haithai91.medium.com/creating-a-react-app-from-scratch-2022-3a66788d66f9)
 - [MUI Installation](https://mui.com/material-ui/getting-started/installation/)
 - [How to Implement localization in React i18next 2022](https://www.ultimateakash.com/blog-details/IixDOGAKYAo=/How-to-Implement-localization-in-React-i18next-2022)
 - [env-cmd: Load environment variables from an .env file](https://github.com/toddbluhm/env-cmd)

## Creator

**Juan Cuartas** https://twitter.com/juancuartas

## Copyright and license

Code and documentation released under [the MIT license](https://github.com/equisoide/react-mui-ts-template/blob/master/LICENSE)
