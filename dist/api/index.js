"use strict";
/**
 * Import Api
 */
var facile_1 = require('facile');
var build = require('../../build');
require('./config');
require('./services');
require('./filters');
require('./entities');
require('./routes');
facile_1.facile.start('debug', function () {
    if (facile_1.facile._config.env === 'development')
        build.development();
    else
        build.production();
});
//# sourceMappingURL=index.js.map