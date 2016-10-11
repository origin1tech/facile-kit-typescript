"use strict";
var facile_1 = require('facile');
// Import the configuration.
// This contains all settings for
// the server along with middleware,
// security filters, services and
// localization.
require('./config');
// Import Services.
require('./services');
// Import Security Filters.
require('./filters');
// Import all application entities
// which contains routing, controllers,
// security policies and modeling.
require('./entities');
// Call configure.
// If using facile-cli there's no
// need to pass a config to "configure"
// Otherwise pass a specific environment
// config or Facile will look for "development".
// If doesn't exist defaults are used.
facile_1.facile.configure('debug')
    .init()
    .server()
    .filters()
    .models()
    .controllers()
    .routes()
    .done()
    .start();
//# sourceMappingURL=index.js.map