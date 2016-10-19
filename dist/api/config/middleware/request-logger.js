"use strict";
/**
 * Route Logger Middleware
 */
var facile_1 = require('facile');
facile_1.facile.registerMiddleware('requestLogger', function (req, res, next) {
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    facile_1.facile.log.log('request', req.method, req.url, ip);
    next();
});
//# sourceMappingURL=request-logger.js.map