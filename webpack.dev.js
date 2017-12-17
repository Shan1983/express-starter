/*
 * Webpack config for server dev
*/

const path = require('path');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: './config/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
  // load in our loaders and stuffs
  module: {
    // sigh the fun starts here..
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      }, // end js loader
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            // creates styles from js strings
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          }, // end style loader
          {
            // translates css into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, // end css loader
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          }, // end of postcss loader
          {
            // compile sass
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true,
            },
          }, // end sass loader
        ],
      }, // end of css loaders
      {
        // load all images in base64 if theyre smaller than 8192 bytes
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // in dev we want to see the path of the file
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192,
            },
          },
        ],
      }, // end of url loader
    ], // end of rules
  },
  // plugins: [
  // ],
};
