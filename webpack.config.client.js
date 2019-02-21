const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const ManifestPlugin = require("webpack-manifest-plugin");
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const nodeExternals = require('webpack-node-externals');

const { isProd } = require('./src/server/env');
// const hotMiddlewareScript = 'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&timeout=20000&reload=true';

let pathsToClean = [
	'dist',
	'build'
];

let cleanOptions = {
	root:     __dirname,
	exclude:  ['shared.js'],
	verbose:  true,
	dry:      false
};

module.exports = {
	name: 'client',
	entry:  {
		bundle: [
			path.resolve(__dirname, "./src/client/index.js")
		],
	},
    target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: isProd ? "bundle.[hash:8].js" : "bundle.js",
		publicPath: "/landing/static/",
		chunkFilename: "[name].[chunkhash:8].chunk.js"
        // hotUpdateMainFilename: "updates/[hash].hot-update.json",
        // hotUpdateChunkFilename: "updates/[hash].hot-update.js"
    },
	optimization: {
		runtimeChunk: true,
		namedModules: true,
		noEmitOnErrors: true,
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all"
				}
			}
		}
	},
	node: {
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty"
	},
	plugins: [
		new webpack.DefinePlugin({
			__SERVER__: "false",
			__CLIENT__: "true"
		}),
		new MiniCssExtractPlugin({
			filename:
				!isProd
					? "[name].css"
					: "[name].[contenthash].css",
			chunkFilename:
				!isProd
					? "[id].css"
					: "[id].[contenthash].css"
		}),
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new ManifestPlugin({ fileName: "manifest.json" }),
		new WriteFileWebpackPlugin(),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extensions: [ '.js', '.jsx', '.es6', '.ts', '.json', '.css', '.mjs'],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'frontend'),
			path.resolve(__dirname, 'frontend/components'),
		],
	},
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? 'none': 'inline-source-map',
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
							name: "assets/[name].[hash:8].[ext]",
							limit: 10 * 1024
						}
					}
				]
			},
			// {
			// 	exclude: [/\.(js|css|mjs|html|json|mp4|webm)$/],
			// 	use: [
			// 		{
			// 			loader: "file-loader",
			// 			options: {
			// 				name: 'assets/[name].[hash:8].[ext]',
			// 				emitFile: false
			// 			}
			// 		}
			// 	]
			// },
            {
                test: /\.css$/,
                use: [
	                !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                ]
            }
		]
	},
	stats: isProd ? {
		colors: false,
		hash: true,
		timings: true,
		assets: true,
		chunks: true,
		chunkModules: true,
		modules: true,
		children: true,
	} : {
		cached: false,
		cachedAssets: false,
		chunks: false,
		chunkModules: false,
		colors: true,
		hash: false,
		modules: false,
		reasons: false,
		timings: true,
		version: false
	},
    // externals: nodeExternals(),
};
