"use strict";
/**
 * Base Environment
 *
 * All other environments are
 * extended from this env.
 */
var facile_1 = require('facile');
var winston_1 = require('winston');
// import * as mongoose from 'mongoose';
// let connection = mongoose.connect('mongodb://127.0.0.1/facile');
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
// Export Base so it can be used
// to extend other configs.
exports.base = {
    // When false manuual control of
    // each step of the initialization
    // is required. Set to true and
    // Facile will itialize automatically
    // calling before & after listener
    // events when defined.
    auto: false,
    // Configure the Logger.
    // @see https://github.com/winstonjs/winston
    logger: logger,
    // The host addresss to listen on.
    host: '127.0.0.1',
    // The server port to listen on.
    port: 8080,
    // The log level for this
    // environment configuration.
    logLevel: 'info',
    // Express Views
    //
    // @see http://expressjs.com/en/api.html#app.engine
    //
    // These settings are passed to
    // consolidate.js
    // @see https://github.com/tj/consolidate.js/
    //
    views: {
        // The layout path relative to the
        // "views" path(s) defined below
        // without the extension.
        layout: 'index',
        // The engine to use for views.
        engine: {
            // This is the file extension of the
            // rederer used.
            name: 'html',
            // Can be string which will result in
            // consolidate[engine.renderer] or
            // you can pass the consolidate rederer
            // directly.
            renderer: 'ejs'
        },
        // The express view engine.
        'view engine': 'html',
        // The path or paths to your views.
        views: './dist/app'
    }
};
facile_1.facile.registerConfig('base', exports.base);
//# sourceMappingURL=base.js.map