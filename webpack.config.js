const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules:[
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css/,
                use: [
                    // creates style nodes fom JS strings
                    'style-loader',
                    // translates CSS into Common JS
                    'css-loader',
                    // Compiles sass to CSS
                    'sass-loader'
                ],
                exclude: /(node_modules|bower_components)/,
            },
        ],
    },
}








// entry: './client/App.jsx',
// output: {
    //     path: path.resolve(__dirname, 'build'),
    //     filename: 'bundle.js'
    // },
    //
    // mode: 'production',
    // module: {
        //     rules:[
            //         {
                //             test: /\.jsx?/,
                //             exclude: /node_modules/,
                //             use: {
                    //                 loader: 'babel-loader',
                    //                 options: {
                        //                     presets: ['@babel/preset-env', '@babel/preset-react']
                        //                 }
                        //             }
                        //         },
                        //         {
                            //             test: /\.scss$/,
                            //             use: [
                                //                 // creates style nodes fom JS strings
                                //                 'style-loader',
                                //                 // translates CSS into Common JS
                                //                 'css-loader',
                                //                 // Compiles sass to CSS
                                //                 'sass-loader'
                                //             ],
                                //             exclude: /(node_modules|bower_components)/,
                                //         },
                                //     ],
                                // },
