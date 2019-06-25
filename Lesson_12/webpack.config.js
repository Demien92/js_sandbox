const CopyPlugin = require('copy-webpack-plugin');
const  path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    plugin: [
        new CopyPlugin([
            { from: 'src/index.html', to: 'dest/index.html' },
        ])
    ],
};