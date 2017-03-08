module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname, 
        filename: 'bundle.js' 
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015', 'stage-0']
                }
            },
            { test: /\.css$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
            }
        ]
    },
    "plugins": ["transform-decorators-legacy"]
};