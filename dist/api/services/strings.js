"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Default Service
 */
var facile_1 = require('facile');
var StringsService = (function (_super) {
    __extends(StringsService, _super);
    function StringsService() {
        _super.apply(this, arguments);
    }
    StringsService.prototype.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return StringsService;
}(facile_1.Service));
exports.StringsService = StringsService;
facile_1.facile.registerComponent(StringsService);
//# sourceMappingURL=strings.js.map