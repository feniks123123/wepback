const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const WriteFileWebpackPlugin = require("write-file-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/server/server.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "server.js",
		publicPath: "/landing/static/"
	},
    name: 'server',
	target: 'node',
	mode: !devMode ? "production" : "development",
	externals: nodeExternals(),
	resolve: {
		extensions: [ '.js', '.jsx', '.es6', '.ts'],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'frontend'),
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__SERVER__: "true",
			__CLIENT__: "false"
		}),
		new WriteFileWebpackPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.jsx$|\.es6$|\.js$|\.ts$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react'],
					}
				},
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|ico)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'assets/[name].[hash:8].[ext]',
							limit: 10 * 1024
						}
					}
				]
			},
            {
                test: /\.css$/,
                use: [
	                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                ]
            },
            // {
            //     exclude: [/\.(js|css|mjs|html|json|mp4|webm)$/],
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: 'assets/[name].[hash:8].[ext]',
            //                 emitFile: false
            //             }
            //         }
            //     ]
            // },
		],
	},
    // stats: {
	//     colors: true
    // }
};
