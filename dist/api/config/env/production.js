"use strict";
// Import Dependencies.
var facile_1 = require('facile');
// Production Environment
exports.production = {
    env: 'production',
    logLevel: 'error'
};
// Add Configuration.
facile_1.facile.registerConfig('production', 'base', exports.production);
//# sourceMappingURL=production.js.map