var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './shared/components'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'shared'],
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
        },
        host: '127.0.0.1'
    }
};