/**
 * This file controls the Storybook server's behavior.
 * You must restart Storybook’s process when you change it.
 * Learn more: https://storybook.js.org/docs/react/configure/overview
 */
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5",
    "disableTelemetry": true,
  },
  "webpackFinal": async (config) => {
    injectEnvVariables(config);
    return config;
  },
}

// Manually inject environment variables into the webpack config object.
// Note that otherwise, only `STORYBOOK_*` prefix env vars are supported.
// Ref: https://github.com/storybookjs/storybook/issues/12270
function injectEnvVariables(config) {
  const findPlugin = (name) => config.plugins.find(
    ({ constructor }) => constructor && constructor.name === name,
  );

  const definePlugin = findPlugin('DefinePlugin');
  const interpolateHtmlPlugin = findPlugin('InterpolateHtmlPlugin');
  const definitions = Object.keys(definePlugin.definitions);
  const replacements = Object.keys(interpolateHtmlPlugin.replacements);
  const isMissingKey = (key) => !definitions.includes(`process.env.${key}`);
  const missingKeys = replacements.filter(isMissingKey);

  missingKeys.forEach((key) => {
    definePlugin.definitions[`process.env.${key}`] = JSON.stringify(
      interpolateHtmlPlugin.replacements[key],
    );
  });
};
