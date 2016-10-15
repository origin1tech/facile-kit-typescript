"use strict";
// Import Dependencies.
var facile_1 = require('facile');
// Development Environment
exports.development = {
    logLevel: 'debug'
};
// Add Configuration.
facile_1.facile.registerConfig('development', 'base', exports.development);
//# sourceMappingURL=development.js.map