const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  configureWebpack: (config) => {
    // mars3d-
    const cesiumSourcePath = 'node_modules/cesium/Build/Cesium/' // cesium库安装目录
    const cesiumRunPath = './cesium/' // cesium运行时路径

    const plugins = [
      // 标识cesium资源所在的主目录，cesium内部资源加载、多线程等处理时需要用到
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(path.join(config.output.publicPath, cesiumRunPath))
      }),
      // Cesium相关资源目录需要拷贝到系统目录下面（部分CopyWebpackPlugin版本的语法可能没有patterns）
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSourcePath, 'Workers'), to: path.join(config.output.path, cesiumRunPath, 'Workers') },
          { from: path.join(cesiumSourcePath, 'Assets'), to: path.join(config.output.path, cesiumRunPath, 'Assets') },
          { from: path.join(cesiumSourcePath, 'ThirdParty'), to: path.join(config.output.path, cesiumRunPath, 'ThirdParty') },
          { from: path.join(cesiumSourcePath, 'Widgets'), to: path.join(config.output.path, cesiumRunPath, 'Widgets') }
        ]
      })
    ]

    return {
      module: { unknownContextCritical: false }, // 配置加载的模块类型，cesium时必须配置
      plugins: plugins,
    }
  }
})
