# React, MUI and TypeScript Template
This template is intended to help you start a new `React SPA` project from scratch with a comprehensive file structure, required dependencies, built-in configurations, example components and good practices for React Web Development.

The project was bootstrapped with [Create React App](https://create-react-app.dev) following this [Tutorial](https://github.com/equisoide/react-mui-ts-steps). Below you will find some information about main features and how to perform common tasks.

## Supported Language Features
This project supports a superset of the latest `JavaScript`/`TypeScript` standard. In addition to [ES6](http://es6-features.org) syntax features, it also supports:
- [Exponentiation Operator](https://github.com/tc39/proposal-exponentiation-operator) (ES2016)
- [Async/await](https://github.com/tc39/proposal-async-await) (ES2017)
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018)
- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 4 proposal)
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal)
- [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html) and [TypeScript](https://www.typescriptlang.org)

Constant enums and namespaces are not supported, you can learn about the constraints of using [Babel with TypeScript here](https://babeljs.io/docs/en/babel-plugin-transform-modules-amd).

## Core Libraries
- [React 18.2.0](https://reactjs.org) with `React Scripts 5.0.1`
- [SASS 1.60.0](https://sass-lang.com) with [CSS Modules](https://github.com/css-modules/css-modules)
- [MUI 5.11.15](https://mui.com) with `Emotion` styling engine, `Roboto Fonts` and `Material Icons`
- [TypeScript 4.7.4](https://www.typescriptlang.org) with [ES6](http://es6-features.org)
- [I18next 22.4.13](https://react.i18next.com) for internationalization
- [React Router 6.10.0](https://reactrouter.com/) for the routing system

## Documentation Tools
- [Storybook 6.5.16](https://storybook.js.org) to document components

## Code Quality & Performance
- [ESLint 8.37.0](https://eslint.org) with `TypeScript`, `React`, `React Hooks` and `Jest` configuration
- [Stylelint 15.3.0](https://stylelint.io) to analyse `CSS`/`SCSS` files
- [Jest 29.5.0](https://jestjs.io/docs/getting-started) to test `JavaScript`/`TypeScript` files
- [React Testing Library 14.0.0](https://testing-library.com/docs/react-testing-library/intro) to test components
- [Web Vitals 3.3.0](https://web.dev/vitals) to meassure performance

## Built-in Settings
- [.editorconfig](https://editorconfig.org) settings to standardize charset, ending of lines and indentation
- [.vscode](https://code.visualstudio.com/docs/getstarted/settings) settings with integrated Chrome Debugger, faster search results and auto-format on save
- [Environment files](https://create-react-app.dev/docs/adding-custom-environment-variables) for `Local`, `Test`, `Development`, `QA`, `Staging` and `Production`

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
   * [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
   * [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
   * [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
5. Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Google Chrome

## Running & Debugging the application for the first time
1. Open a new [VS Code](https://code.visualstudio.com/download) window:
   - `File` > `New Window`
3. Open a parent folder that will host this project (e.g. `~/Projects`):
   - `File` > `Open Folder`
4. Open a new terminal:
   - `Terminal` > `New Terminal`
5. Clone repo:
   - `git clone https://github.com/equisoide/react-mui-ts-template.git`
6. Install project dependencies:
   - `cd react-mui-ts-template`
   - `npm run init` (performs a [Clean Install](https://docs.npmjs.com/cli/v8/commands/npm-ci))
7. Restart VS Code to refresh TypeScript Intellisense, otherwise you might see errors in the editor:
   - Close VS Code
   - Open a new VS Code window
   - Open the folder where the project was cloned
8. Start the application:
   - Open a new terminal
   - `npm start`
9. Start debugging in VS Code:
   - Press `F5` or click on `Run and Debug` > `Green Debug Icon`
   - You can set breakpoints and inspect components in the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Available Scripts
| Command               | Description                                      | Evironment File  |
| :---                  | :---                                             | :---             |
| `npm run init`        | Installs project dependencies for the first time | N/A              |
| `npm run lint`        | Analyses **JavaSript**/**TypeScript** code       | N/A              |
| `npm run lint:f`      | Try to fix **JavaSript**/**TypeScript** errors   | N/A              |
| `npm run slint`       | Analyses **CSS**/**SCSS** styles                 | N/A              |
| `npm run slint:f`     | Try to fix **CSS**/**SCSS** errors               | N/A              |
| `npm test`            | Executes Unit Tests outputting to `out/coverage` | .env.test        |
| `npm start`           | Runs the App in http://localhost:4000            | .env.local       |
| `npm run start-https` | Runs the App in https://localhost:4001 (HTTPS)   | .env.https.local |
| `npm run build:l`     | Builds the App to `out/build/local`              | .env.local       |
| `npm run build:d`     | Builds the App to `out/build/development`        | .env.development |
| `npm run build:q`     | Builds the App to `out/build/qa`                 | .env.qa          |
| `npm run build:s`     | Builds the App to `out/build/staging`            | .env.staging     |
| `npm run build`       | Builds the App to `out/build/production`         | .env.production  |
| `npm run sbook`       | Runs Storybook in http://localhost:4002          | .env.local       |
| `npm run sbook-https` | Runs Storybook in https://localhost:4003 (HTTPS) | .env.https.local |
| `npm run sb-build:l`  | Builds Storybook to `out/storybook/local`        | .env.local       |
| `npm run sb-build:d`  | Builds Storybook to `out/storybook/development`  | .env.development |
| `npm run sb-build:q`  | Builds Storybook to `out/storybook/qa`           | .env.qa          |
| `npm run sb-build:s`  | Builds Storybook to `out/storybook/staging`      | .env.staging     |
| `npm run sb-build`    | Builds Storybook to `out/storybook/production`   | .env.production  |

## Running local builds
You can run local builds of the Application and Storybook by using [http-server](https://github.com/http-party/http-server). The following example creates a local build of the App and runs it using http-server:
  - `npm run build:l`
  - `npx http-server out/build/local`

## Project Structure
After cloning, your project should look like this:

```
📦 react-mui-ts-template
├── 📜 .editorconfig                EditorConfig settings
├── 📜 .env                         Variables common to all environments
├── 📜 .eslintignore                Folders and files ignored by ESLint
├── 📜 .eslintrc                    ESLint configuration
├── 📜 .gitignore                   Folders and files ignored by Git
├── 📜 .npmrc                       Npm configuration
├── 📜 .stylelintrc                 Stylelint configuration
├── 📜 LICENSE                      License information
├── 📜 package-lock.json            Npm dependency tree to recreate node_modules
├── 📜 package.json                 Project dependencies, scripts and more
├── 📜 README.md                    Project documentation
├── 📜 tsconfig.json                TypeScript configuration
├── 📂 .env-override
│   ├── 📜 .env.development         Environment variables for Development
│   ├── 📜 .env.https.local         Environment variables for Local (HTTPS)
│   ├── 📜 .env.local               Environment variables for Local
│   ├── 📜 .env.production          Environment variables for Production
│   ├── 📜 .env.qa                  Environment variables for QA
│   ├── 📜 .env.staging             Environment variables for Staging
│   └── 📜 .env.test                Environment variables for Unit Test
├── 📂 .storybook
│   ├── 📜 favicon.svg              Favicon for Storybook
│   ├── 📜 main.js                  Storybook server behavior
│   ├── 📜 manager.js               Customize how Storybook App renders
│   └── 📜 preview.js               Global code that applies to all stories
├── 📂 .vscode
│   ├── 📜 extensions.json          Recomended extensions to load in VS Code
│   ├── 📜 launch.json              Launch Chrome against localhost
│   └── 📜 settings.json            Settings for VS Code
├── 📂 public
│   ├── 📜 favicon.ico              The icon found in the URL address bar
│   ├── 📜 index.html               HTML where the React App is rendered
│   ├── 📜 logo192.png              PWA icon (192x192)
│   ├── 📜 logo512.png              PWA icon (512x512)
│   ├── 📜 manifest.json            Metadata to install the App as a PWA
│   └── 📜 robots.txt               Instructions for search crawlers
└── 📂 src
    ├── 📜 index.tsx                The application entry point
    ├── 📜 react-app-env.d.ts       TypeScript declarations for React App
    ├── 📜 setupTests.ts            Global setup before running tests
    ├── 📂 app
    │   └── 📜 index.tsx            The main App component with routes
    ├── 📂 components/HelloWorld
    │   ├── 📜 index.module.scss    Component styles
    │   ├── 📜 index.stories.tsx    Storybook documentation
    │   ├── 📜 index.test.tsx       Jest testing file
    │   ├── 📜 index.tsx            Example component definition
    │   └── ...
    ├── 📂 lang
    │   ├── 📜 index.ts             i18next configuration
    │   ├── 📜 resources.en.json    Application texts in English
    │   └── 📜 resources.es.json    Application texts in Spanish
    ├── 📂 pages
    │   └── ...                     React components for each page
    ├── 📂 stories
    │   └── ...                     Files for the Storybook intro page
    ├── 📂 styles
    │   ├── 📜 _reset.scss          Simple CSS reset for consistent styles
    │   └── 📜 main.scss            Main SASS file
    └── 📂 util
        └── 📜 web-vitals.ts        Web Vitals reporting
```
For the project to build, these files must exist with exact filenames:
- `public/index.html` is the page template
- `src/index.tsx` is the TypeScript entry point

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by webpack. You need to put any TypeScript and SCSS files inside `src`, otherwise webpack won’t see them.

Only files inside public can be used from `public/index.html`.

## File extensions
Most of the files you will create in the `src` folder will be **TypeScript**, **TypeScript with React** or **SASS**:
- `.ts`: TypeScript files (Don't use `.js`). Use it for:
  - Utilities. e.g. `arrays.ts`
  - Test of utilities. e.g. `arrays.test.ts`
- `.tsx`: TypeScript with React (Don't use `.jsx`). Use it for:
  - Components. e.g. `HelloWorld/index.tsx`
  - Test of components. e.g. `HelloWorld/index.test.tsx`
  - Storybook stories. e.g. `HelloWorld/index.stories.tsx`
- `.scss`: Superset of CSS (Don't use `.css`). Use it for:
  - Global styles. e.g. `main.css`
  - Component styles. e.g. `HelloWorld/index.module.scss`

## Adding a Stylesheet
This project supports [Sass](https://sass-lang.com/guide) alongside [CSS Modules](https://github.com/css-modules/css-modules):
- `Sass` is CSS with superpowers
- `CSS Modules` scopes CSS by automatically creating a unique **className**

`Sass` supports two syntaxes:
- `.scss`: Is an extension of CSS where every valid CSS is a valid **.scss** as well
- `.sass`: Is an older indented syntax not recommended for use in new **Sass** files

In this project we use the `.scss` syntax.

To express that a component depends on a **.scss module**, you should use the `[name].module.scss` convention:
```tsx
import styles from './index.module.scss';

function MyComponent() {
  return <div className={styles.myClass}>My Component</div>;
}
```

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all `.scss` files will be concatenated into a single minified `.css` file in the build output.

To share variables between **Sass** files, you can use Sass's [@use](https://sass-lang.com/documentation/at-rules/use) rule. There is a `SASS_PATH` variable in the `.env` file that is used to locate `.scss` files. Supposing that `SASS_PATH='./src/styles'` and that you have `_colors.scss` in that directory, then you can use it like this:
```scss
@use 'colors';

.info {
  color: colors.$primary;
}
```

For information about how to structure a SASS codebase using the **7-1 Pattern** you can read this [article](https://remote.com/blog/how-to-structure-your-sass-project) or take a look to the following [boilerplate](https://github.com/KittyGiraudel/sass-boilerplate).

## Adding Images and Files
With webpack, using static assets like images and files works similarly to `SCSS`.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. You can control the 10,000 byte threshold by setting the `IMAGE_INLINE_SIZE_LIMIT` environment variable as documented in the [advanced configuration](https://create-react-app.dev/docs/advanced-configuration).

```tsx
import logo from './logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}
```

## Using HTTPS in Local Environment
You may require the local server to run the App or Storybook over [HTTPS](https://create-react-app.dev/docs/using-https-in-development):
- Use `npm run start-https` to run the APP over HTTPS
- Use `npm run sbook-https` to run Storybook over HTTPS

Note that you might get an error in the console telling that `localhost.pem` or `localhost-key.pem` files can't be found. This is because when running the App over HTTPS a valid **Certificate Authority** and an **SSL certificate** are needed.

To generate those files use [mkcert](https://www.mariokandut.com/how-to-setup-https-ssl-in-localhost-react):
- You need a package manager to install **mkcert**:
  - **MacOS**: Use Homebrew (`brew install mkcert`)
  - **Linux**: Use Certutil
  - **Windows**: Use Chocolatey
- Once installed **mkcert**:
  - Open a terminal at the root of the project
  - Create a locally trusted CA with `mkcert -install`
  - Generate an SSL certificate with `mkcert localhost`
  - `localhost.pem` and `localhost-key.pem` will be generated
  - Note that these files are included in the `.gitignore`

## Working in StrictMode
`<StrictMode>` lets you find common bugs in your components early during development. It also helps you to prepare your app for the future. You can read more about it [here](https://react.dev/reference/react/StrictMode).

Strict Mode enables the following development-only behaviors:
- Your components will re-render an extra time to find bugs caused by impure rendering
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup
- Your components will be checked for usage of deprecated APIs.

To enabble/disable StrictMode you can use the `REACT_APP_STRICT_MODE` environment variable. By default it's set to `true` in the following files:
- `.env.development`
- `.env.https.local`
- `.env.local`

## Updating NPM Dependencies
[npm-check-updates](https://github.com/raineorshine/npm-check-updates) upgrades your `package.json` dependencies to the latest versions, ignoring specified versions. Choose which packages to update in interactive mode:
```shell
$ npx ncu -i

Upgrading package.json
[====================] 46/46 100%

? Choose which packages to update »
  ↑/↓: Select a package
  Space: Toggle selection
  a: Toggle all
  Enter: Upgrade

❯ (*) react-router-dom   ^6.9.0  →  ^6.10.0
  (*) typescript         ^4.7.4  →   ^5.0.3
  (*) webpack           ^5.76.3  →  ^5.77.0
```

Install selected packages:
```shell
? Run npm install to install new versions? » y
```

Test everything is working fine
- Delete **node_modules** folder
- Delete **out** folder (if exists)
- Install project dependencies for the first time: `npm run init`
- Restart VS Code in order to refresh **TypeScript Intellisense**
- Analyse **JavaSript/TypeScript** code: `npm run lint`
- Try to fix **JavaSript/TypeScript** errors: `npm run lint:f`
- Analyse **CSS**/**SCSS** styles: `npm run slint`
- Try to fix **CSS**/**SCSS** errors: `npm run slint:f`
- Execute Unit Tests outputting to **out/coverage**: `npm test`
- Run the App in http://localhost:4000: `npm start`
- Create a locally trusted CA: `mkcert -install`
- Generate an SSL certificate: `mkcert localhost`
- Run the App in https://localhost:4001: `npm run start-https` (HTTPS)
- Build the App to **out/build/local**: `npm run build:l`
- Run the App local build `npx http-server out/build/local`
- Build the App to **out/build/development**: `npm run build:d`
- Run the App development build `npx http-server out/build/development`
- Build the App to **out/build/qa**: `npm run build:q`
- Run the App qa build `npx http-server out/build/qa`
- Build the App to **out/build/staging**: `npm run build:s`
- Run the App staging build `npx http-server out/build/staging`
- Build the App to **out/build/production**: `npm run build`
- Run the App production build `npx http-server out/build/production`
- Run Storybook in http://localhost:4002: `npm run sbook`
- Run Storybook in https://localhost:4003: `npm run sbook-https` (HTTPS)
- Build Storybook to **out/storybook/local**: `npm run sb-build:l`
- Run the Storybook local build `npx http-server out/storybook/local`
- Build Storybook to **out/storybook/development**: `npm run sb-build:d`
- Run the Storybook development build `npx http-server out/storybook/development`
- Build Storybook to **out/storybook/qa**: `npm run sb-build:q`
- Run the Storybook qa build `npx http-server out/storybook/qa`
- Build Storybook to **out/storybook/staging**: `npm run sb-build:s`
- Run the Storybook staging build `npx http-server out/storybook/staging`
- Build Storybook to **out/storybook/production**: `npm run sb-build`
- Run the Storybook production build `npx http-server out/storybook/production`

## Working Guidelines
- Never delete and re-generate the `package-lock.json` file from scratch, it will break the App and Storybook! Let `npm` update that file every time you install a new dependency
- Create reusable components inside the `src/components` folder. Define each component in its own folder with the following structure:
  ```
  ├── 📂 src/components/MyComponent   Component name in PascalCase
      ├── 📜 index.module.cs          Component styles (optional)
      ├── 📜 index.stories.tsx        Storybook documentation
      ├── 📜 index.test.tsx           Jest testing file
      └── 📜 index.tsx                Component definition
  ```
- Prefer [Function Components](https://www.robinwieruch.de/react-function-component) over **Class Components**, they offer almost the same: state and lifecycle methods, with the plus they are more lightway, have a sophisticated API and require less code. With the introduction of [React Hooks](https://reactjs.org/docs/hooks-intro.html) it's possible to write your entire application with just functions as React Components:
  ```tsx
  // External imports
  import Box from '@mui/material/Box';
  import { BoxProps } from '@mui/material';
  import { useTranslation } from 'react-i18next';

  // Local imports
  import styles from './index.module.scss';

  // Component props
  export interface MyComponentProps {
    /**
     * The box container styles.
     * See: https://mui.com/material-ui/api/box
     */
    box?: BoxProps
  }

  // Component definition
  function MyComponent({ box } : MyComponentProps) {
    const { t } = useTranslation();

    const defaults = MyComponent.defaultProps;
    const boxProps = { ...defaults.box, ...box } as BoxProps;

    return (
      <Box className={styles.box} {...boxProps}>
        {t('hello-world')}
      </Box>
    );
  }

  // Default props
  MyComponent.defaultProps = {
    box: {
      sx: { background: 'blue' },
    },
  };

  // Default export
  export default MyComponent;
  ```
- Use default `imports` and `exports` when a module only exports a single thing (for example, a component). Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.
- In general use [Trailing Commas](https://blog.logrocket.com/best-practices-using-trailing-commas-javascript) (except on `JSON` files), many coding styles now recommend using them all the time because they make it easier to add new parameters to your functions or copy/paste properties in arrays and objects and also helps with producing cleaner diff output
- Add your own environment variables to the `.env-override/.env.local` file, this file should not be commited
- Before running or building this application always run linters and unit tests

## Troubleshooting
- **When running `npm run lint` you get this error: "Expected linebreaks to be 'LF' but found 'CRLF'"**
  - This happens because on Windows, Git converts linebreaks from `LF` to `CRLF` when you checkout the code, but esLint is configured to accept valid ending of lines as `LF` (unix style)
  - To avoid Git converting from `LF` to `CRLF`, run the following commands:
    ```shell
    git config --global core.autocrlf false
    git config --global core.eol lf
    git rm --cached -r .
    git reset --hard
    ```
- **On VS Code you get this errors: "JSX element implicitly has type 'any'..."**
  - This happens because your Typescript IntelliSense is not working properly
  - To fix it reload your code editor: `Ctrl + p` > `Developer: Reload Window`

## More Topics
- [Configuring Supported Browsers](https://create-react-app.dev/docs/supported-browsers-features#configuring-supported-browsers)
- [Updating React to New Releases](https://create-react-app.dev/docs/updating-to-new-releases)

## Documentation & Training
- [Official React Documentation](https://es.reactjs.org)
- [React Function Components](https://www.robinwieruch.de/react-function-component)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ES6](http://es6-features.org/#Constants)
- [Sass Basics](https://sass-lang.com/guide)
- [MUI Crash Course](https://www.youtube.com/watch?v=o1chMISeTC0)
- [MUI From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ)
- [MUI Components](https://mui.com/material-ui/react-autocomplete)
- [MUI Templates](https://mui.com/material-ui/getting-started/templates)

## Creator
**Juan Cuartas** https://github.com/equisoide

## Copyright and License
Code and documentation released under [the MIT license](https://github.com/equisoide/react-mui-ts-template/blob/master/LICENSE)
