"use strict";
// Import Dependencies.
var facile_1 = require('facile');
var base_1 = require('./base');
// Production Environment
var production = {
    env: 'production',
    logLevel: 'error'
};
// Extend the environment with base config.
production = facile_1.facile.extend({}, base_1.base, production);
// Add Configuration.
facile_1.facile.addConfig('production', production);
//# sourceMappingURL=production.js.map