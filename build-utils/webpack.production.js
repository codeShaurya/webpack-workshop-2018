const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(__dirname);
module.exports = () => ({
    output: {
        filename: "[name].chunk.js",
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
})