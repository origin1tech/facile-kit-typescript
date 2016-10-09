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
    // Configure the Logger.
    // @see https://github.com/winstonjs/winston
    logger: logger,
    host: '127.0.0.1',
    port: 8080,
    logLevel: 'info',
    // Express Views
    // @see https://expressjs.com/en/guide/using-template-engines.html
    //
    // These settings are passed to
    // consolidate.js
    // @see https://github.com/tj/consolidate.js/
    //
    views: {
        engine: 'hogan',
        'view engine': 'html',
        views: '/web/views'
    },
    database: ''
};
//# sourceMappingURL=base.js.map