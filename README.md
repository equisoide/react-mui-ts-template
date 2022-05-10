# React, MUI and TypeScript starter project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
 - `React 18.1.0` with `React Scripts 5.0.1`
 - `Material UI 5.6.4` with `Emotion` styling engine, `Roboto Fonts` and `Font Icons`
 - `TypeScript 4.4.2`
 - `esLint 8.14.0` with `airbnb` and `TypeScript` plugins
 - `stylelint 14.8.2`
 - Built-in environment files: `local`, `test`, `development`, `qa`, `staging` and `production`
 - `.editorconfig` settings to standardize ending of lines and indentation
 - `.vscode` settings to sort explorer items by type and to get faster search results
 - `.gitignore` settings to prevent auto-generated files to be committed

Below you will find some information on how to perform common tasks.

## Environment Quick Setup

1. Install [NodeJs](https://nodejs.org/es/download/)
2. Install [Git](https://git-scm.com/downloads)
3. Install [VS Code](https://code.visualstudio.com/download)
4. Install VS Code useful extensions:
   * [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
   * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   * [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   * [Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
   * [NpmIntellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
   * [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
5. Install [ReactDeveloperTools for Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Running the application for the first time

1. Clone repo: `git clone https://github.com/equisoide/react-web-boilerplate.git`
2. Install all required packages: `npm install`
3. Create `.env.local` file in the `env` folder with your own environment variables
4. Start the application: `npm start`

## Available Scripts
| Command             | Description                                             | Evironment      |
| :---                | :---                                                    | :---            |
| `npm install`       | Installs all packages required for this project         | N/A             |
| `npm run lint`      | Analyses JavaSript/TypeScript code for potential errors | N/A             |
| `npm run stylelint` | Analyses CSS files for potential errors                 | N/A             |
| `npm test`          | Launches the test runner                                | env.test        |
| `npm start`         | Runs the app in http://localhost:3000                   | env.local       |
| `npm run build`     | Builds the app for `production` to the `build` folder   | env.production  |
| `npm run build:dev` | Builds the app for `development` to the `build` folder  | env.development |
| `npm run build:loc` | Builds the app for `local` to the `build` folder        | env.local       |
| `npm run build:qa`  | Builds the app for `qa` to the `build` folder           | env.qa          |
| `npm run build:stg` | Builds the app for `staging` to the `build` folder      | env.staging     |
