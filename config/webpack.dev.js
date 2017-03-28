var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const path = require('path');

const envConfig = {
  dev: {
    ENV: 'DEV',
    API: 'http://localhost:4001',
    BI_BASE_URL: 'http://localhost:3000',
    DATA_API: 'https://dataapi.bidev.adnoc.co.ae/analysis/v1',
    USE_MOCK:'N'
  },
  adnoc_dev: {
    ENV: 'PROD',
    API: 'https://bidev.adnoc.co.ae/api',
    BI_BASE_URL: 'https://bidev.adnoc.co.ae',
    DATA_API: 'https://dataapi.bidev.adnoc.co.ae/analysis/v1',
    USE_MOCK:'N'
  }
}

module.exports = (env = {}) => {

  return webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      //publicPath: 'http://localhost:8080/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.CONFIG': JSON.stringify(envConfig[env.config])
      })
    ],
    devServer: {
      historyApiFallback: true,
      stats: 'minimal'
    }
  });
}