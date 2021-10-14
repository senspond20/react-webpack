require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    mode: process.env.NODE_ENV,
    optimization : {minimizer:[]},
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        main : [path.join(__dirname, '/src')],
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename : '[name]_bundle.js'
    },
    module: {
        rules :[
            {
                test : /\.(js|jsx)?/,
                exclude: /node_module/,
                loader : 'babel-loader',
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    devServer: {
        port : 3000,
        historyApiFallback : true // 존재하지 않는 HTTP 요청에 대해 404를 응답하지 않고 index.html 로 리디렉션
        // proxy : {
        //     '/admin' : 'localhost:5000'
        // }
    },
}