const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: `${__dirname}/src/index.ts`,
    output: {
        path: `${__dirname}/public`,
        filename: 'index.js',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [`${__dirname}/public`]
        }),
        new CopyPlugin([
            { from: `${__dirname}/src/index.html`, to: `${__dirname}/public` },
        ]),
    ],
    devServer: {
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000/api'
        },
        historyApiFallback: true,
        index: './src/index.html',
        contentBase: `${__dirname}/public`,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.json'],
        modules: [`${__dirname}/node_modules`],
    },
};
