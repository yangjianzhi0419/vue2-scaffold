const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html')
        .tap(args => {
          args[0].title = "空天地一体监测集成系统";
          return args;
        });
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  }
})
