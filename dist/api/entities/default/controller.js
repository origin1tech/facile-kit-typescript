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
        var config = this.facile._config;
        res.render(config.views.layout);
    };
    /**
     * view
     *
     * @desc handles rendering views.
     * @method view
     * @param {any} url
     * @returns
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.view = function (url) {
        return function (req, res) {
            res.render(url);
        };
    };
    /**
     * redirect
     *
     * @desc handles redirected routes.
     * @method redirect
     * @param {any} url
     * @returns
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.redirect = function (url) {
        return function (req, res) {
            res.redirect(url);
        };
    };
    /**
     * find
     *
     * @desc find records handler.
     * @method find
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.find = function (req, res) {
        this.errors.notImplemented();
    };
    /**
     * findOne
     *
     * @desc find one record handler.
     * @method findOne
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.findOne = function (req, res) {
        this.errors.notImplemented();
    };
    /**
     * create
     *
     * @desc create record handler.
     * @method create
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.create = function (req, res) {
        this.errors.notImplemented();
    };
    /**
     * update
     *
     * @desc update record handler.
     * @method update
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.update = function (req, res) {
        this.errors.notImplemented();
    };
    /**
     * destroy
     *
     * @desc destroy record handler.
     * @method destroy
     * @param {IRequest} req
     * @param {IResponse} res
     *
     * @memberOf DefaultController
     */
    DefaultController.prototype.destroy = function (req, res) {
        this.errors.notImplemented();
    };
    return DefaultController;
}(facile_1.Controller));
exports.DefaultController = DefaultController;
facile_1.facile.registerComponent(DefaultController);
//# sourceMappingURL=controller.js.map