'use strict';

let fs = require('fs');
let path = require('path');
let cwd = process.cwd();

module.exports = (base) => {

	base.plugins = {};

	/**
	 * Converts string to Titlecase
	 */
	base.toTitlecase = (str) => {
		return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase()
					 + txt.substr(1).toLowerCase(); });
	};

	/**
	 * Normalize target path using
	 * source path.
	 */
	base.normalizePath = (sourceDir, targetPath, resolve) => {

		let hasDir = path.dirname(targetPath) !== '.';
		let result;

		// If has dir then is full path.
		if (hasDir) {

			let definedPath = path.join(cwd, targetPath);
			let altPath = path.join(cwd, sourceDir, targetPath);

			// Check if path exists.
			if (fs.existsSync(definedPath))
				result = path.relative(cwd, definedPath);

			// Otherwise check if alt path exists.
			else if (fs.existsSync(altPath))
				result = path.relative(cwd, definedPath);

			// If we reach here the path does not exist.
			else
				throw new Error('Path could not be found at: ' + definedPath);

		}

		else {

			let joined = path.join(sourceDir, targetPath);

			if (fs.existsSync(joined))
				result = path.relative(cwd, joined);

			else
				throw new Error('Path could not be found at: ' + joined);

		}

		if (resolve)
			return path.resolve(cwd, result);

		return result;

	};

	/**
	 * Normalize paths in object or array.
	 */
	base.normalizePaths = (sourceDir, obj, resolve) => {

		if (typeof obj !== 'object' && typeof obj !== 'string')
			throw new TypeError('Failed to normalize expected object or array but got ' + typeof obj);

		// If string normalize as object.
		if (typeof obj === 'string')
			return { app: [ utils.normalizePath(sourceDir, obj, resolve) ] };

		else if (Array.isArray(obj)) {

			let arr = [];

			obj.forEach((el) => {
				arr.push(utils.normalizePath(sourceDir, el, resolve));
			});

			return { app: arr };

		}

		else {

			// Cheesy clone but prob all that's required.
			let clone = JSON.parse(JSON.stringify(obj));

			for(let prop in clone) {

				if (clone.hasOwnProperty(prop)) {

					let val = clone[prop];

					if (typeof val === 'string') {
						clone[prop] = [utils.normalizePath(sourceDir, val, resolve)];
					}

					else if (Array.isArray(val)) {

						let arr = [];

						val.forEach((el) => {

							arr.push(utils.normalizePath(sourceDir, el, resolve));

						});

						clone[prop] = arr;

					}

				}

			}

			return clone;

		}

	};

	/**
	 * Adds plugins to temporary object
	 * for sorting purposes.
	 */
	base.addPlugin = (plugin, order) => {

		// Add to plugins object.
		base.plugins[plugin.name] = {
			instance: plugin,
			order: order || 9999
		}

	};

	/**
	 * Sorts and optionally adds
	 * plugins to plugin config array.
	 */
	base.sortPlugins = () => {

		let plugins = [];

		for (let prop in base.plugins) {
			if (base.plugins.hasOwnProperty(prop)) {
				let val = base.plugins[prop];
				plugins.splice(val.order, 0, val.instance);
			}
		}

		return plugins;

	};

	return base;

};
