/**
 * Use preview.js for global code that applies to all stories.
 * Learn more: https://storybook.js.org/docs/react/configure/overview
 */
import { addParameters } from '@storybook/client-api';
import initI18n from '../src/lang';
import '../src/styles/main.scss';

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
