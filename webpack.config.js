const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	sourсe: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.sourсe + '/index.js',

	output: {
		path: PATHS.build,
		filename: '[name].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: PATHS.sourсe + '/index.pug',
		})
	],

	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	}
};