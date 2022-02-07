const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pages = ['home', 'buttons', 'calendars', 'inputs', 'lists', 'selects'];

const entry = {};
pages.forEach((page) => {
	entry[page] = `./src/pages/${page}/index.js`;
});

module.exports = (env = {}, argv = {}) => {
	return {
		entry,
		output: {
			clean: true,
		},
		resolve: {
			extensions: ['.js', '.scss'],
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			},
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					use: 'babel-loader',
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								disable: argv.mode === 'development',
							},
						},
					],
				},
			],
		},
		plugins: [
			// argv.mode === 'development'
			// 	? new HtmlWebpackPlugin({
			// 			template: path.resolve(__dirname, './src/index.html'),
			// 			filename: 'index.html',
			// 	  })
			// 	: null,
			new CopyPlugin({
				patterns: [{ from: 'src/templates', to: '.' }],
			}),
		].filter((plugin) => !!plugin),
	};
};
