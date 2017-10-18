const path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');



module.exports = {
    entry: ["babel-polyfill", "./src/script/index.js"],
    
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ]
            })
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin(
            {
                template: 'src/views/index.html',
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new CopyWebpackPlugin([{ from: './src/images', to: './images' }]),
        new BrowserSyncPlugin(
            // BrowserSync options 
            {
                // browse to http://localhost:3000/ during development 
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint 
                // (which should be serving on http://localhost:3100/) 
                // through BrowserSync 
                proxy: 'http://localhost:8080/'
            },
            // plugin options 
            {
                // prevent BrowserSync from reloading the page 
                // and let Webpack Dev Server take care of this 
                reload: false
            }
        ),
        new UglifyJSPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};