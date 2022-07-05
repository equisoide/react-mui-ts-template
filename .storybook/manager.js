/**
 * This file allows you to customize how Storybook’s app UI renders.
 * That is, everything outside of the Canvas (preview iframe).
 * Learn more: https://storybook.js.org/blog/declarative-storybook-configuration
 */
import favicon from './favicon.svg';

// Change Storybook Favicon.
// Ref: https://github.com/storybookjs/storybook/issues/6155
const injectFavicon = () => {
  const link = document.createElement('link');

  link.setAttribute('rel', 'icon');
  link.setAttribute('href', favicon);
  link.setAttribute('type', 'image/svg+xml');

  document.head.appendChild(link);
};

injectFavicon();
