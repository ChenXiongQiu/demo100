webpack2-Learning
# webpack2基本介绍
## 介绍
* webpack和gulp一样是一个自动化的构建工具
  + 你不想做的东西都交给工具去做，比如混淆，压缩，移动，合并，添加浏览器兼容性词缀
* gulp更适合做简单的流程性的操作，webpack是专门为处理SPA应用的复杂文件依赖而出现的
  * 如图
 

### 安装依赖
* `npm install webpack -g`
* `npm install webpack -save-dev`

### 编写配置文件

```
var path=require('path')

module.exports = {
    // 指定spa应用的入口文件
    entry: path.resolve(__dirname, 'src/js/app.js'),
    // 指定项目构建的输出位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
}

```

### 运行
* 在项目根目录执行`webpack`可以启动默认配置文件webpack.config.js
* 运行指定配置文件执行`webpack --config webpack.develop.config.js`

### 把运行命令放到package.json文件中
* 启动命令还可以加很多参数`webpack --config webpack.develop.config.js --progress --profile --colors`
* 这么多参数不可能都记住，所以将启动命令写到package.json的script标签中

### 监听代码变化自动重新构建
* 代码的变动需要多次运行`npm run develop`所以我们需要自动监听代码变动，然后运行构建，于是我们用到了webpack-dev-server这个模块

#### webpack-deve-server介绍
* webpack-dev-server封装了webpack和http模块
  + 所以webpack的所有命令，webpack-deve-server都可以使用
  + webpack-dev-server可以指定一个文件夹启动一个服务
    - webpack-dev-server启动的服务所有的内容都构建在内存中
    - 因为构建在内存中速度快，还有一个功能，就是没有变化的文件，不重新构建，只有变化了的文件才从新执行构建
* 作用
  + 一是监听文件变化自动重新构建
  + 二是自动刷新浏览器，可以热更新

#### 基本使用
* 下载`npm install webpack-dev-server@9.9.9 -save-dev`,注意选择2.x版本的模块
* 修改package.json文件中的命令`webpack-dev-server --config webpack.develop.config.js --progress --profile --colors`
* 修改开发配置文件
   + webpack2中推荐所有的服务配置信息都写到配置文件中的devServer属性中，不要写在package.json中
   + 基本配置
   
   ```
   devServer: {
        // 指定启动服务的更目录
        contentBase: __dirname + '/src',
        // 指定端口号
        port: 8080,
        host: 'localhost',
        // 以下信息可有可无，为了完整
        inline: true, 
        historyApiFallback: true,
        noInfo: false,
        // stats: 'minimal',
        // publicPath: publicPath
   },
   ```

#### 热更新
* 可以不刷新浏览器更新
* 修改配置文件

```
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
```

* 需要配合一个内置插件一起使用

```
var webpack=require('webpack')

plugins: [
   new webpack.HotModuleReplacementPlugin(),
]
```

# Loaders（加载器）
* 在真正构建之前做一些预处理操作就叫加载器

## 处理es6、es7、jsx语法加载器
* `npm install babel-loader --save-dev`
* `npm install babel-core  babel-preset-es2015   babel-preset-react -save-dev`
* `npm install babel-preset-stage-0 babel-preset-stage-1 babel-preset-stage-2 babel-preset-stage-3 --save-dev`
* `npm install babel-plugin-transform-runtime -save-dev`这个插件的作用是支持es7特性
* 修改配置文件

```
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
            }
        ]
    }
```

* 创建.babelrc文件

```
{
  "presets": [
    "es2015",
    "react",
    "stage-0",
    "stage-1",
    "stage-2",
    "stage-3"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

## 处理css文件引用的加载器
* `npm install style-loader css-loader -save-dev`
* 修改配置文件

```
 // 处理在js中引用css文件
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
},
```

## 处理scss或者less文件引用的加载器
* `npm install sass-loader less-loader node-sass -save-dev`
* 修改配置文件

```
  // 处理在js中引用scss文件
{
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
},
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
},
```

## 处理图片引用的加载器
* `npm install url-loader file-loader -save-dev`
* 修改配置文件

```
// 处理图片操作  25000bit ~3kb
{
    test: /\.(png|jpg|jpeg|gif)$/,
    use: 'url-loader'
},
```

## 处理字体文件引用的加载器
* `npm install url-loader file-loader -save-dev`
* 修改配置文件

```
// 处理字体文件
{
    test: /\.(eot|woff|ttf|woff2|svg)$/,
    use: 'url-loader'
}
```

## 处理浏览器兼容前缀
* `npm install postcss-loader autoprefixer -save-dev`
* 修改配置文件

```
{
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader!postcss-loader"
    })
},
// 处理在js中引用scss文件
{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader!postcss-loader!sass-loader"
    })
},
{
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader!postcss-loader!less-loader"
    })
},
```

* 新建postcss.config.js

```
module.exports = {
  plugins: [
    require('autoprefixer')({browsers:'last 2 versions'})
  ]
}
```

## 处理统一风格管理
* `npm  install eslint-loader -save-dev`
* 修改配置文件

```
// 这个只是加载器部分的写法，具体使用请看eslint文档
{
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options:{
        configFile:'.eslintrc.js'
    }
},
```


## 处理vue文件
* `npm  install vue-loader -save-dev`
* 修改配置文件

```
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
        loaders: {
            js: [
                    'babel-loader',
                    {
                        loader: "eslint-loader",
                        options: {
                            configFile: '.eslintrc.js'
                        }
                    }
            ],
            css: 'style-loader!css-loader'
        }
    }
},
```


# 发布策略
* 简单的说就是将开发阶段的配置文件复制一份到部署的配置文件中，然后删删改改就可以了
* 把热更新插件删除，devServer属性删除
* 修改图片处理和字体处理加载器

```
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
```

* 接下来运行`npm run  publish`就发布了
* 不过要注意所有的css，js，图片都构建到一个bundle.js文件中了


# Plugins（插件）
* 在真正构建之后做一些后处理操作就叫插件

## 删除插件
* `npm install clean-webpack-plugin -save-dev`
* 使用

```
var CleanPlugin = require('clean-webpack-plugin');

plugins: [
    // 删除文件夹的插件
    new CleanPlugin(['dist'])
]
```

## 抽取公共js插件
* 使用

```
 entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        vendors: ['vue','vue-router','vuex']
    },
    
    
plugins: [
    // 分离第三方应用的插件
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
]
```

## 提取样式文件插件
* `npm install extract-text-webpack-plugin@4.4.4 -save-dev`注意下载2.x版本
* 使用

```
// 1、抽取css的第三方插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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

//3、加一个插件
plugins: [
    // 删除文件夹的插件
    new ExtractTextPlugin("app.css"),
]

```


## 自动生成html插件
* `npm install html-webpack-plugin -save-dev`
* 在根目录创建template.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>webpack学习</title>
</head>
<body>
<div id="app"></div>
</body>
</html>
```

* 修改配置文件

```
var HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
    // 自动生成html插件
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
]
```

## 压缩插件
* 修改配置文件

```
plugins: [
   // 压缩混淆js代码插件
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
]

```


## 定义生产环境插件
* 修改配置文件

```
plugins: [
  // 在构建的过程中删除警告
   new webpack.DefinePlugin({
       'process.env':{
           NODE_ENV:'"production"'
       }
   })
]
```


## 自动打开浏览器插件
* `npm install open-browser-webpack-plugin -save-dev`
* 使用

```
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

plugins: [
    // 删除文件夹的插件
   new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
]
```

# 高级
## 和gulp的集成
* `npm install gulp del gulp-sequence -save-dev`
* 编写配置文件

```
// gulp的任务是控制执行流程，webpack的任务是处理复杂引用的依赖

var gulp = require('gulp');
// 删除文件和目录
var del = require('del');
// 按顺序执行
var gulpSequence = require('gulp-sequence');
// 引入webpack的本地模块
var webpack = require("webpack");
// 引入wbpack的配置文件
var webpackConfig = require("./webpack.publish.config.js");

gulp.task('default', ['sequence'], function () {
    console.log("项目构建成功");
});

// 流程控制
gulp.task('sequence', gulpSequence('clean','webpack'));

// 删除文件和文件夹
gulp.task('clean', function (cb) {
    //del('dist);// 如果直接给dist的目录，项目启动的顺序还有清除结果会报错，所以要写的更详细一些
    del(['dist/*.js', 'dist/*.css', 'dist/images', 'dist/fonts,','dist/*.html']).then(function () {
        cb()
    });
});


//写一个任务，在gulp中执行webpack的构建
// gulp 负责任务流程部分的操作，webpack负责复杂模块系统的引用分离工作
gulp.task('webpack', function (cb) {
    // 执行webpack的构建任务
    webpack(webpackConfig, function (err, stats) {

        if (err) {
            console.log("构建任务失败");
        } else {
            cb();
        }

    });
});
```

## 和eslint的集成

## 代码的异步加载
* 修改配置文件

```
output: {
    publicPath:'/',
    chunkFilename: '[name]_[chunkhash:8]_chunk.js'
},
```

* 代码中的写法
  + react
  
  ```
  <Route path="movieDetail/:id"
         getComponent={
             (nextState, callback)=> {
                 require.ensure([], (require)=> {
                     callback(null, require("../containers/MovieDetailContainer.js").default)
                 }, "movieDetail")
             }
         }
  />
  ```
  + vue
  
  ```
  const MovieContainer= r => require.ensure([], () => r(require('../containers/MovieContainer.vue')),'movie')
  ```


## 组件库按需加载处理
### react中的antd按需加载配置

```
npm install babel-plugin-import -save-dev
// 修改babel配置文件
{
  "presets": ["es2015", "react","stage-0","stage-1","stage-2","stage-3"],
  "plugins": [
    ["import", { "libraryName": "antd","style": "css" }]
  ]
}
```

### vue中的element按需加载配置

```
npm install babel-plugin-component-save-dev
// 修改babel配置文件
{
  "presets": [
    "es2015",
    "react",
    "stage-0",
    "stage-1",
    "stage-2",
    "stage-3"
  ],
  "plugins": [
    "transform-runtime",
    [
      "component",
      [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        }
      ]
    ]
  ]
}
```


# 其他
## 启用source-map
* 现在的代码是合并以后的代码，不利于排错和定位，只需要在config中添加

```
devtool: 'source-map',

output: {
    sourceMapFilename: '[name].map'
},
```

* 这样出错以后就会采用source-map的形式直接显示你出错代码的位置。

## 加载jQuery plugin或者其他legacy第三方库
* 你的项目有时候会要加载各种各样的第三方库，比如一些jQuery的插件，它们都依赖jQuery，但如果直接引用就会报错`jQuery is not undefined`这类的错误，因为一些老的库不支持AMD或者CommonJS等一些先进的格式，所以有几种方法解决

```
// plugin.js
(function ($) {
    const shade = "#556b2f";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));
```

### 方法一：webpack.ProvidePlugin
* 作用：把一个全局变量插入到所有的代码中
* 修改配置文件

```
 plugins: [
    //provide $, jQuery and window.jQuery to every script
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
```

```
//这个也不需要了 因为$, jQuery, window.jQuery已经被注入到每一个js中，都可以直接使用了
//import $ from 'jquery';
import './plugin.js';
...
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  //call our jquery plugin!
  $('p').greenify();
});
```

### 方法二：import-loader
* `npm install imports-loader --save-dev`
* 修改配置文件

```
//注意这种写法 我们把jQuery这个变量直接插入到plugin.js里面了
//相当于在这个文件的开始添加了 var jQuery = require('jquery');
import 'imports?jQuery=jquery!./plugin.js';

//后面的代码一样
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  //call our jquery plugin!
  $('p').greenify();
});
```

## exports-loader
* 从模块中导出变量的功能

```
// 直接绑定在全局变量window上面
// Hello.js
window.Hello = function(){
    console.log('say hello.');
}


//然后我们在index.js文件里去引用这个Hello.js:var hello = require('./Hello.js');。这样引用的结果是变量hello是
//undefined。因为我们在Hello.js文件里没有写module.exports=window.Hello，所以index.js里我们require的结果就是
//undefined。这个时候，exports-loader就派上用场了。我们只用把index.js的代码稍微改动一下：var hello = require
//('exports?window.Hello!./Hello.js');，这个时候，代码就能正确的运行了。变量hello就是我们定义的window.hello啦。
//var hello = require('exports?window.Hello!./Hello.js');这行代码，等于在Hello.js里加上一句module
//.exports=window.Hello，所以我们才能正确的导入。

```

## expose-loader
* 把一个模块导出并付给一个全局变量

```
require("expose?libraryName!./file.js");
// Exposes the exports for file.js to the global context on property "libraryName".
// In web browsers, window.libraryName is then available


//例子中的注释是说把file.js中exports出来的变量付给全局变量"libraryName"。假如file.js中有代码module.exports=1，那么
//require("expose?libraryName!./file.js")后window.libraryName的值就为1（我们这里只讨论浏览器环境）

```

## resolve属性

```
resolve: {
    //注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
    extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx', '.vue'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
        'assets': path.resolve(__dirname, './src/assets'),
        'components': path.resolve(__dirname, './src/components')
    }
},
```

## external属性

```
// 配置了这个属性之后 vue 和 vue-router这些第三方的包都不会被构建进 js 中，那么我们就需要通过 cdn 进行文件的引用了
//externals对象的key是给require时用的，比如require('vue'),，对象的value表示的是如何在global（即window）中访问到该对象，这里是window.Vue
externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
},
```


























