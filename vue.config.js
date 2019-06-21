const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: !isProd,
  css: {
    sourceMap: !isProd,
    loaderOptions: {
      less: {
        sourceMap: !isProd,
      },
      stylus: {
        import: [path.resolve(__dirname, "./src/theme/default.theme.styl")],
      },
    },
  },

  configureWebpack: {
    devtool: !isProd && "eval-source-map",
  },

  publicPath: isProd ? "./" : "/",

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/less/utils/index.less")],
    },
  },
};
