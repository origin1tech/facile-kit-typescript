/**
 * Filters can be added individual
 * or as an object.
 *
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var facile_1 = require('facile');
var DefaultFilter = (function (_super) {
    __extends(DefaultFilter, _super);
    function DefaultFilter() {
        _super.apply(this, arguments);
    }
    /**
     * isAuthenticated
     *
     * @method isAuthenticated
     * @param {IRequest} req
     * @param {IResponse} res
     * @param {INextFunction} next
     *
     * @memberOf DefaultFilter
     */
    DefaultFilter.prototype.isAuthenticated = function (req, res, next) {
        // do something to ensure
        // authenticated for example
        // using express session.
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