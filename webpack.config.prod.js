const path = require('path'); // eslint-disable-line 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line 
const TerserPlugin = require("terser-webpack-plugin"); // eslint-disable-line 
const ESLintPlugin = require('eslint-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = { // eslint-disable-line 
    mode: 'production',
    entry: {
        index: './src/index.js',
        email: './src/email.js',
        join: './src/join-us.js',
        webcomp: './src/webcomp.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // eslint-disable-line 
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') // eslint-disable-line 
        },
        port: 3000,
        open: true,
        hot: true,
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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
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
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/images'),
                to: path.resolve(__dirname, 'dist')
            }]
        })
    ]
}