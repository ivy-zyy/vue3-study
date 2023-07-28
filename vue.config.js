const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 修复热更新失效 & 别名
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('view', resolve('src/views'))
      .set('type', resolve('src/type'))
      .set('router', resolve('src/router'))
      .set('components', resolve('src/components'))
      .set('request', resolve('src/request'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    port: 8099,
    host: '0.0.0.0',
    open: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'assets'
})
