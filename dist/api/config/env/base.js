"use strict";
var winston_1 = require('winston');
// Define Logger
var logger = new winston_1.Logger({
    level: 'info',
    transports: [
        new (winston_1.transports.Console)({
            prettyPrint: true,
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
    host: '127.0.0.1',
    port: 8080,
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
        layout: 'index',
        engine: {
            name: 'html',
            renderer: 'hogan'
        },
        'view engine': 'html',
        views: './dist/app'
    }
};
//# sourceMappingURL=base.js.map