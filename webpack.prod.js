const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map', //source maps for easier debugging

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [

        {
        //CSS
        test: /\.css$/i,
        use: ["style-loeader", 
        "css-loader"
        ]
        },

        {
        //SASS
        test: /\.scss$/i,
        use: ["style-loader",                   //3. Extract CSS into files
        "css-loader",                           //2. turns CSS into CommonJS
        "sass-loader"                           //1. turns SASS into CSS
        ]
        },

    ]
  },

  plugins: [ 
    new HtmlWebpackPlugin({         //simplifies creation of HTML files to serve webpack bundles, supplying a template
      template: "./src/templates/template.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
  ],
});