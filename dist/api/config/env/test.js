"use strict";
// Import Dependencies.
var facile_1 = require('facile');
var base_1 = require('./base');
// Test Environment
var test = {};
// Extend the environment with base config.
test = facile_1.facile.extend({}, base_1.base, test);
// Add Configuration.
facile_1.facile.addConfig('test', test);
//# sourceMappingURL=test.js.map