const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => {
	return {
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
			argv.mode === 'development' ? new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html'
      }) : null,
		].filter((plugin) => !!plugin),
	};
};
