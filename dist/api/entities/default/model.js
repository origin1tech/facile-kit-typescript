"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var facile_1 = require('facile');
/**
 * Example Model
 *
 * @class ExampleModel
 * @extends {Model}
 */
var ExampleModel = (function (_super) {
    __extends(ExampleModel, _super);
    function ExampleModel() {
        _super.apply(this, arguments);
    }
    return ExampleModel;
}(facile_1.Model));
facile_1.facile.addModel(ExampleModel);
//# sourceMappingURL=model.js.map