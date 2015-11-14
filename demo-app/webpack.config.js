import path from 'path';
import webpack from 'webpack';

export const HOST = '127.0.0.1';
export const PORT = 3000;

const URL = `http://${HOST}:${PORT}`;

export default {
  devtool: '#inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },

  entry: {
    'dev': [
      `webpack-dev-server/client?${URL}`,
      'webpack/hot/dev-server'
    ],

    'isolate-scope': path.resolve(__dirname, 'src/isolate-scope/main'),
    'bind-to-controller': path.resolve(__dirname, 'src/bind-to-controller/main'),
    'prototypal-scope': path.resolve(__dirname, 'src/prototypal-scope/main'),
    'events': path.resolve(__dirname, 'src/events/main'),
    'refactoring': path.resolve(__dirname, 'src/refactoring/main'),
    'hybrid': path.resolve(__dirname, 'src/hybrid/main')
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
