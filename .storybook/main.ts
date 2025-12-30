import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/*.mdx",
    "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
      "@storybook/addon-essentials",
      '@storybook/addon-interactions',
      "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {},
  staticDirs: ['../public'],
};
export default config;
