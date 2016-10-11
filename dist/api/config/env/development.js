"use strict";
// Import Dependencies.
var facile_1 = require('facile');
var base_1 = require('./base');
// Development Environment
var development = {};
// Extend the environment with base config.
development = facile_1.facile.extend({}, base_1.base, development);
// Add Configuration.
facile_1.facile.addConfig('development', development);
//# sourceMappingURL=development.js.map