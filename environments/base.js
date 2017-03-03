var path = require('path');
var cwd = process.cwd();

module.exports = function() {
  return {
    context: cwd,
    entry: {
      app: [
        'reflect-metadata',
        'ts-helpers',
        'zone.js',
        'main.ts'
      ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(cwd, 'build'),
      publicPath: '/build/',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader'
            },
            {
              loader: 'angular2-template-loader'
            }
          ],
          include: [
            path.resolve(cwd, 'app')
          ]
        },
        {
          test: /\.html/,
          loader: 'raw-loader'
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'raw-loader'
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['node_modules', cwd]
    }
  }
}