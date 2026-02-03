      const path = require('path');
      const HtmlWebpackPlugin = require('html-webpack-plugin');

      module.exports = {
        entry: './src/index.html', // Your application entry point
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),
        },
        mode: 'development',
        plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // Uses your HTML file as template
    }),
  ],
  devServer: {
    static: './dist',
  },
};
