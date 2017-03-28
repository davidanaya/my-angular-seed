var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const path = require('path');

const envConfig = {
  dev: {
    ENV: 'PROD',
    API: 'http://localhost:4001',
    BI_BASE_URL: 'http://localhost:3000',
    DATA_API: 'https://dataapi.bi.adnoc.ae/analysis/v1',
    USE_MOCK:'N'
  },
  adnoc_prod: {
    ENV: 'PROD',
    API: 'https://bi.adnoc.ae/api',
    BI_BASE_URL: 'https://bi.adnoc.ae',
    DATA_API: 'https://dataapi.bi.adnoc.ae/analysis/v1',
    USE_MOCK:'N'
  }
}

module.exports = (env = {}) => {

  return webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, '../dist'),
      //publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        mangle: {
          keep_fnames: true
        }
      }),
      new webpack.DefinePlugin({
        'process.env.CONFIG': JSON.stringify(envConfig[env.config])
      }),
      new webpack.LoaderOptionsPlugin({
        htmlLoader: {
          minimize: false // workaround for ng2
        }
      })
    ]
  });
}