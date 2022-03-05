const withSvgr = require("next-svgr");

module.exports = withSvgr({
  swcMinify: true,
  // esModule: true,
  // webpack: (config) => {
  //   config.module.rules
  //     .push
  //     // {
  //     //   test: /\.(png|jpg|gif|svg)$/i,
  //     //   exclude: [/\.inline.svg$/],
  //     //   use: [{ loader: "url-loader" }],
  //     // },
  //     // {
  //     //   test: /\.inline.svg$/i,
  //     //   issuer: /\.[jt]sx?$/,
  //     //   use: ["@svgr/webpack"],
  //     // }
  //     ();
  //   return config;
  // },
});
