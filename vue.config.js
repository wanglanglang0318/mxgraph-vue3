const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  //打本地包
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 8888,
    https: false,
    open: true,
  },
  // 别名配置项
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: (config) => {
    // 去掉console.log
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // 配置分离第三方库
    config.optimization = {
      splitChunks: {
        chunks: "all",
        minSize: 1, // 模块的最小体积
        minChunks: 1, // 模块的最小被引用次数
        maxAsyncRequests: 20, // 按需加载的最大并行请求数
        maxInitialRequests: 20, // 一个入口最大并行请求数
        cacheGroups: {
          //缓存组
          vue: {
            name: "admin-vue",
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: 20,
          },
          vuex: {
            name: "admin-vuex",
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: 19,
          },
          axios: {
            name: "admin-axios",
            test: /[\\/]node_modules[\\/]axios[\\/]/,
            priority: 18,
          },
          "vue-router": {
            name: "admin-router",
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: 17,
          },
          "element-ui": {
            name: "admin-element",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 16,
          },
          vendors: {
            name: "admin-vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
          },
        },
      },
    };
  },
};
