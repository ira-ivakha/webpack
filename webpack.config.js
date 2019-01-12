const path = require( 'path' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( env, options ) => {
	return {
		entry: ['./src/index.js','./src/style.css'],
		
		output: {
			path: path.resolve( __dirname, 'dist' ),
			filename: 'index.js',
		},
		devtool:  'cheap-eval-source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
					},
					exclude: /(node_modules)/
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader"
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'dist/'
							}
						}
					]
				},
			],
		},
		
		plugins: [
			new MiniCssExtractPlugin({
				filename: './style.css',
				chunkFilename: '[id].css'
			})
		],
		
	}
};