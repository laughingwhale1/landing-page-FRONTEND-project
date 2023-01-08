const path = require('path'); // eslint-disable-line 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line 
const TerserPlugin = require("terser-webpack-plugin"); // eslint-disable-line 
const ESLintPlugin = require('eslint-webpack-plugin'); 

module.exports = { // eslint-disable-line 
    mode: 'development',
    entry: {
        index: './src/index.js',
        email: './src/email.js',
        join: './src/join-us.js',
        webcomp: './src/webcomp.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') // eslint-disable-line 
        },
        port: 8080,
        open: true,
        hot: false,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.worker\.js$/,
                use: { loader: "worker-loader" },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'random app',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new ESLintPlugin(),
    ]
}