const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-color-picker',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['@/components'] = path.resolve(
      __dirname,
      '../src/components',
    )
    config.resolve.alias['@/assets'] = path.resolve(__dirname, '../src/assets')
    config.resolve.alias['@/styles'] = path.resolve(__dirname, '../src/styles')
    config.resolve.alias['@/utils'] = path.resolve(__dirname, '../src/utils')
    config.resolve.alias['@/pages'] = path.resolve(__dirname, '../src/pages')
    config.resolve.alias['@/constants'] = path.resolve(
      __dirname,
      '../src/constants',
    )
    return config
  },
}
