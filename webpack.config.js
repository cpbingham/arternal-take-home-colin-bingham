const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: './index.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist/'),
    },
    port: 3000,
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ESLintPlugin({
    useEslintrc: true,
    emitError: false,
    emitWarning: false,
  })],
};
