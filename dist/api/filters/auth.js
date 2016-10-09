/**
 * Filters can be added individual
 * or as an object.
 *
 */
"use strict";
var facile_1 = require('facile');
var AuthFilter = (function () {
    function AuthFilter() {
    }
    AuthFilter.prototype.isAuthenticated = function (req, res, next) {
        next();
    };
    AuthFilter.prototype.isAnonymous = function (req, res, next) {
        next();
    };
    return AuthFilter;
}());
facile_1.facile.addFilter(AuthFilter);
//# sourceMappingURL=auth.js.map