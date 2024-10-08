import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    '@storybook/addon-interactions',
    // "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {},
  staticDirs: ['../public'],
};
export default config;
