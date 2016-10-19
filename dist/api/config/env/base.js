"use strict";
var facile_1 = require('facile');
var winston_1 = require('winston');
// Define Logger
var logger = new winston_1.Logger({
    level: 'info',
    transports: [
        new (winston_1.transports.Console)({
            // prettyPrint: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            exitOnError: false
        })
    ]
});
var base = {
    // False for manual initialization.
    auto: undefined,
    // Winston logger.
    logger: logger,
    // The host addresss to listen on.
    host: '127.0.0.1',
    // The server port to listen on.
    port: 8080,
    // Config log level.
    logLevel: 'info',
    // View configuration.
    views: {
        // Relative to "views" below no extension.
        layout: 'index',
        // The rendering engine for views.
        engine: 'ejs',
        // The extension used for views.
        extension: 'html',
        // The path or paths to your views.
        views: './dist/app'
    },
    // Routes generation and route
    // handler configuration.
    routes: {
        // Disable crud route generation.
        crud: false
    }
};
facile_1.facile.registerConfig('base', base);
//# sourceMappingURL=base.js.map