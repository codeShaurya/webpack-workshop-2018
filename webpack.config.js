const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require('webpack-merge');

const modeConfig = (mode) => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    console.log(mode);
    return webpackMerge(
        {
            mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        loader: [{
                            loader: "url-loader",
                            options: {
                                limit: 250,
                            }
                        }]
                    }
                ]
            },
            output: {
                filename: "bundle.js"
            },
            plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
        },
        modeConfig(mode)
    );
};