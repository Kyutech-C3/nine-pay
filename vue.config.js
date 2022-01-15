module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "NINE Pay",
    }
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: /_redirects|css/ 
    }
  }
}