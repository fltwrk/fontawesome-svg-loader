const { resolve } = require('path');

module.exports = {
  entry: [
    resolve(__dirname, 'src/fontawesome-svg-loader.js')
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'fontawesome-svg-loader.js'
  },
  externals: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      '> 2%',
                      'last 2 versions',
                      'Firefox ESR',
                      'IE 11'
                    ]
                  },
                  useBuiltIns: 'usage'
                }
              ]
            ],
            env: {
              production: {
                presets: [
                  'minify'
                ]
              }
            },
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
          ]
      }
    ]
  }
};
