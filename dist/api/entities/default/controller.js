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
    DefaultController.prototype.index = function (req, res) {
    };
    return DefaultController;
}(facile_1.Controller));
facile_1.facile.addController(DefaultController);
//# sourceMappingURL=controller.js.map