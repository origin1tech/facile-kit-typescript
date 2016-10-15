"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var facile_1 = require('facile');
/**
 * REST Controller
 *
 * @desc handles automatically generated routes by models.
 * @class RestController
 * @extends {Controller}
 */
var RestController = (function (_super) {
    __extends(RestController, _super);
    function RestController() {
        _super.apply(this, arguments);
    }
    RestController.prototype.index = function (req, res) {
        //let config = this.facile._config;
        res.render('index');
    };
    return RestController;
}(facile_1.Controller));
exports.RestController = RestController;
facile_1.facile.registerComponent(RestController);
//# sourceMappingURL=controller.js.map