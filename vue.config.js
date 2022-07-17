module.exports = {
  transpileDependencies: [
      'vuetify'
  ],
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
      proxy: {
        '/server': {
          target: 'http://127.0.0.1:8987',
          pathRewrite:{'^/server':''},
          changeOrigin: true
        },
      }
    }
}