"use strict";
/**
 * Example Middleware
 */
var facile_1 = require('facile');
var errorHandler = require('errorhandler');
// if (facile._config.env === 'development')
facile_1.facile.addMiddleware('requestLogger', errorHandler());
//# sourceMappingURL=error-handler.js.map