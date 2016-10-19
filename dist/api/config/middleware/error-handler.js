"use strict";
/**
 * Error Handler Middleware
 */
var facile_1 = require('facile');
var errorHandler = require('errorhandler');
if (process.env.NODE_ENV === 'development')
    facile_1.facile.registerMiddleware('errorHandler', errorHandler());
//# sourceMappingURL=error-handler.js.map