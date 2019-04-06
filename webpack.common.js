import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import ExtractTextPlugin from 'mini-css-extract-plugin';

dotenv.config();

export default {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', 
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            }
          }
        ]
      }, 
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?outputPath=images/'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.png', '.svg', '.ico', '.jpg'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css' }),
    new webpack.EnvironmentPlugin([
      'API_ROOT_URL'
    ])
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};