var path=require('path')
var webpack=require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 指定spa应用的入口文件
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        vendors: ['react','react-dom','react-router']
    },
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            // 2、处理在js中引用css文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            // 处理在js中引用scss文件
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader"
                })
            },
            // 处理在js中引用scss文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!less-loader"
                })
            },
            // 处理图片操作  25000bit ~3kb
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000&name=images/[name].[ext]'
            },
            // 处理字体文件
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        // 删除文件夹的插件
        new CleanPlugin(['dist']),
        // 分离第三方应用的插件
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        new ExtractTextPlugin("app.css"),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css":["app.css"],
                    "js": ["vendors.js", "bundle.js"]
                }
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        })
    ]
}