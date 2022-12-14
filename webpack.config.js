const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      // Ignore the declaration files
      {
        test: /\.d\.ts$/,
        use: {
          loader: 'ignore-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:7000'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    port: 7000,
    historyApiFallback: {
      index: '/index.html'
    }
  }
}
