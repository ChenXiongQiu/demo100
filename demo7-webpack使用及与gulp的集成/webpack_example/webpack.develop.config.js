var path=require('path')
var webpack=require('webpack')

module.exports = {
    // 指定spa应用的入口文件
    entry: path.resolve(__dirname, 'src/js/app.js'),
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options:{
                    configFile:'.eslintrc.js'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader'
            },
            // 处理字体文件
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        // 指定启动服务的更目录
        contentBase: __dirname + '/src',
        // 指定端口号
        port: 8080,
        host: 'localhost',
        // 启用热更新
        hot: true,
        // 以下信息可有可无，为了完整
        inline: true,
        historyApiFallback: true,
        noInfo: false,
        // stats: 'minimal',
        // publicPath: publicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}