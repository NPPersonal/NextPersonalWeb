module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (baseConfig) =>{
    const fileLoaderRule = baseConfig.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.inline.svg$/;

    baseConfig.module.rules.push({
      test: /\.inline.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });
    return baseConfig
  }
}