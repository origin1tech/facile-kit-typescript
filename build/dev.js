'use strict';

let path = require('path');
let strip = require('strip-ansi');
let chalk = require('chalk');
let base = require('./base');

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let webpackDevMiddleware = require('webpack-dev-middleware');
let browserSync = require('browser-sync').create();
let HtmlWebpackPlugin = require('html-webpack-plugin');

// Configure dev & debug.
base.config.debug = true;
base.config.devtool = '#eval-source-map';

// Add style loader.
base.config.module.loaders.push({ test: /\.scss$/, loaders: ['style', 'css', 'sass'] });

// Define plugins.
base.config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
base.config.plugins.push(new webpack.HotModuleReplacementPlugin());
base.config.plugins.push(new webpack.NoErrorsPlugin());
base.config.plugins.push(new HtmlWebpackPlugin(base.layout));

// Define the compiler.
let compiler = webpack(base.config);

// Bundler event listener
compiler.plugin('done', function (stats) {
		if (stats.hasErrors() || stats.hasWarnings()) {
				return browserSync.sockets.emit('fullscreen:message', {
						title: 'Webpack Error:',
						body:  strip(stats.toString()),
						timeout: 100000
				});
		}
		browserSync.reload();
});

// Init Browser Sync
browserSync.init({
	host: 'localhost',
	port: 3000,
	proxy: 'http://localhost:8080/',
	open: false,
	logFileChanges: false,
	middleware: [
		webpackDevMiddleware(compiler, {
			publicPath: base.config.output.publicPath,
			hot: true,
			inline: true,
			stats: base.stats
		})
	],
	plugins: ['bs-fullscreen-message'],
	files: [
		path.resolve(base.outDir, '**/*.*')
	]
});