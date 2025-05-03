const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", //source maps for easier debugging
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), //where to serve content from
    }},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
        {
        //CSS
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
        },

        {
        //SASS
        test: /\.scss$/i,
        use: ["style-loader", //3. inject styles into DOM
        "css-loader",         //2. turns CSS into CommonJS
        "sass-loader"         //1. turns SASS into CSS
        ]
        },
    ],
  },
  
  plugins: [new HtmlWebpackPlugin({   //simplifies creation of HTML files to serve webpack bundles, supplying a template
      template: "./src/templates/template.html"
    })],
  

});