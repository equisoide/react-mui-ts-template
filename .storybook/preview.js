// Use preview.js for global code that applies to all stories.
// Learn more: https://storybook.js.org/docs/react/configure/overview

// External imports
import { addParameters } from '@storybook/client-api';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Local imports
import initI18n from '../src/lang';

import '../src/styles/site.scss';
import '../src/styles/material-icons.scss';

// Global initialization
initI18n();

// Set the "Docs" tab as the default tab.
// Ref: https://github.com/storybookjs/storybook/issues/12111
addParameters({
  viewMode: 'docs',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
