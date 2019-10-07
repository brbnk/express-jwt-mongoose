const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = { 
    module: { 
        rules: [
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            },
            {
                test: /\.s?[ac]ss/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: { 
        extensions: [ 
            '.jsx', '.js', '.scss'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ]
}