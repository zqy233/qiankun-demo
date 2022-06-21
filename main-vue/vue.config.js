const { defineConfig } = require("@vue/cli-service")
console.log(process, process.env.NODE_ENV)
module.exports = defineConfig({
  transpileDependencies: true
})
