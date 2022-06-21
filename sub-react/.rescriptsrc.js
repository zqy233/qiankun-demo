const { name } = require("./package")

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = "umd"
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
    config.output.globalObject = "window"
    return config
  },
  devServer: _ => {
    const config = JSON.parse(JSON.stringify(_))
    config.headers = {
      "Access-Control-Allow-Origin": "*"
    }
    // config.historyApiFallback = true
    config.hot = false
    // config.open = false
    // config.port = 8004
    config.liveReload = false
    console.log(config)
    return config
  }
}
