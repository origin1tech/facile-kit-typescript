"use strict";
// Import Dependencies.
var facile_1 = require('facile');
var base_1 = require('./base');
// Development Environment
var debug = {
    logLevel: 'debug'
};
// Extend the environment with base config.
debug = facile_1.facile.extend({}, base_1.base, debug);
// Add Configuration
facile_1.facile.addConfig('debug', debug);
//# sourceMappingURL=debug.js.map