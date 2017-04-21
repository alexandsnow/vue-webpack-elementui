var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
    "entry": "./index.js",
    "output": {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash].js"
    },
    "module": {
        loaders: [
            {
                test: /\.vue$/,
                exclude: "/node_modules",
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "index.html"
        })
    ]
}
module.exports = webpackConfig;