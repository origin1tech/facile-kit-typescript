'use strict';

// Libs
let path = require('path');
let base = require('./base');
let chalk = require('chalk');

// Webpack and Plugins.
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// Set uglify options
let uglifyOptions = {
	compress: {
		warnings: false
	}
};

// Set html options.
let htmlOptions = base.layout;
htmlOptions.minify = {
	collapseWhitespace: true,
	removeComments: true
};

// Extracts css to own file.
base.config.module.loaders.push({ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') });

// Load Plugins.
base.config.plugins.push(new CleanWebpackPlugin(base.outDir, { exclude: [] }));
base.config.plugins.push(new ExtractTextPlugin('css/[name].css'));
base.config.plugins.push(new webpack.optimize.DedupePlugin());
base.config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
base.config.plugins.push(new webpack.optimize.CommonsChunkPlugin('common.js'));
base.config.plugins.push(new webpack.optimize.UglifyJsPlugin(uglifyOptions));
base.config.plugins.push(new HtmlWebpackPlugin(htmlOptions));

// Define the webpack compiler.
let compiler = webpack(base.config);

// Run the compiler.
compiler.run((err, stats) => {
	if (err)
		console.log(chalk.bold.red(err.name)) + ': ' + err.message;
	if (stats)
		console.log(stats.toString(base.stats));
	console.log('\n' + chalk.bold.blue('Build Completed') + '\n');
});