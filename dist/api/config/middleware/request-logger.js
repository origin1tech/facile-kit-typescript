"use strict";
/**
 * Example Middleware
 * This example logs the method,
 * url and ip for the requesting
 * node.
 */
var facile_1 = require('facile');
facile_1.facile.addMiddleware('requestLogger', function (req, res, next) {
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    facile_1.facile.logger.log('request', req.method, req.url, ip);
    next();
});
//# sourceMappingURL=request-logger.js.map