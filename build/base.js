'use strict';

// Require Libs
let path = require('path');
let cwd = process.cwd();
let pkg = require('../package.json');
let assign = require('object-assign');
let utils = require('./utils');

// Require Plugins
let CopyWebpackPlugin = require('copy-webpack-plugin');

// Export the configuration & helpers.
let base = {

	// Current working dir.
	cwd: cwd,

	// Package.json
	pkg: pkg,

	// Source directory.
	sourceDir: './src',

	// Output directory.
	outDir: './dist',

	// Public vendor directory.
	publicDir: './public',

	// Path public assets resolve
	// to from index view.
	publicPath: '/',

	// Main entry file.
	main: 'main.ts',

	// Target type to expose module
	// var, commonjs, amd etc.
	libraryTarget: undefined,

	// Name the library should be
	// exposed as.
	library: undefined,

	// Config for output to terminal
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false
  },

};

// Extend the base options.
assign(base, pkg.webpack || pkg.build || {});

// Html plugin configuration.
// see: https://github.com/ampedandwired/html-webpack-plugin
// Minification options
// see: https://github.com/kangax/html-minifier#options-quick-reference
base.layout = {
	title: undefined,																			// layout title defaults to package.json name.
	template: path.resolve(base.sourceDir, 'index.html'),	// template where scripts will be injected.
	inject: false,																				// should be false when template is used.
	favicon: undefined,
	hash: undefined,
	minify: false
},

// Common configuration.
base.config = {

	entry: {
		main: [ path.resolve(base.sourceDir, base.main),
					'webpack/hot/dev-server',
					'webpack-hot-middleware/client?http://localhost:8080'
		]
	},

	output: {
		path: path.resolve(cwd, base.outDir), 							// root of the output path.
		publicPath: base.publicPath,                     		// path relative to index.
		filename: '[name].js',                            	// must be relative.
		chunkFilename: '[id].js',                      			// must be relative.
		libraryTarget: base.libraryTarget,               		// expose lib to global, commonjs, amd etc.
		library: base.library                            		// library name.
	},

	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},

	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	},

	plugins: []

};

// Extend base with utils.
utils(base);

// Set title
base.layout.title = base.layout.title || base.toTitlecase(pkg.name);

// Add base copy plugin.
base.config.plugins.push(new CopyWebpackPlugin([
		{
			context: path.resolve(base.sourceDir),
			from: path.resolve(base.sourceDir, '**/*.html'),
			ignore: [ path.resolve(base.sourceDir, 'index.html') ]
		},
		{
			from: path.resolve(base.publicDir),
			ignore: []
		}
]));

module.exports = base;







