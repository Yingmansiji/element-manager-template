module.exports = {
  // publicPath默认值是'/'，即你的应用是被部署在一个域名的根路径上
  // 这里设置为'./'，可以避免打包后的静态页面空白
  publicPath: "./",

  lintOnSave: false,

  // 注意：需根据项目情况确定上下文名称
  outputDir: "xxx-manager",

  // 注意：把productionSourceMap值改为false。不然会导致源码暴露，安全测试不通过。
  productionSourceMap: false,

  devServer: {
    open: true,
    host: "localhost",
    port: "8020",
    proxy: {
      "/api": {
        target: "", // 域名
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
        Object.assign(options, { limit: 5120 })  // 大于5kb的图片被处理成base64格式
      )
  },

};
