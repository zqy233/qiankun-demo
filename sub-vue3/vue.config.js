const { defineConfig } = require("@vue/cli-service")
const { name } = require("./package")
const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
