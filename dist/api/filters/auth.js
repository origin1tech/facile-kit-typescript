"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Default Filter
 */
var facile_1 = require('facile');
var DefaultFilter = (function (_super) {
    __extends(DefaultFilter, _super);
    function DefaultFilter() {
        _super.apply(this, arguments);
    }
    DefaultFilter.prototype.isAuthenticated = function (req, res, next) {
        next();
    };
    DefaultFilter.prototype.isAnonymous = function (req, res, next) {
        next();
    };
    return DefaultFilter;
}(facile_1.Filter));
exports.DefaultFilter = DefaultFilter;
facile_1.facile.registerComponent(DefaultFilter);
//# sourceMappingURL=auth.js.map