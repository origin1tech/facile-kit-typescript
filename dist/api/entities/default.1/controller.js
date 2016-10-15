"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var facile_1 = require('facile');
/**
 * Default Controller
 *
 * @class DefaultController
 * @extends {Controller}
 */
var DefaultController = (function (_super) {
    __extends(DefaultController, _super);
    function DefaultController() {
        _super.apply(this, arguments);
    }
    /**
     * Renders Layout
     *
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.index = function (req, res) {
        var config = this._facile._config;
        // res.render(config.views.layout);
    };
    /**
     * Render Views Helper.
     *
     * @param {string} view
     * @param {Object} [options]
     * @param {ICallback} [cb]
     * @returns
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.view = function (view, options, cb) {
        return function renderView(req, res) {
            res.render(view, options);
        };
    };
    /**
     * Redirect Url Helper.
     *
     * @param {string} url
     * @param {number} [status]
     * @returns
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.redirect = function (url, status) {
        return function urlRedirect(req, res) {
            res.redirect(status || 301, url);
        };
    };
    return DefaultController;
}(facile_1.Controller));
exports.DefaultController = DefaultController;
facile_1.facile.registerComponent(DefaultController);
//# sourceMappingURL=controller.js.map