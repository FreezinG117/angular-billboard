var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var bb = require('billboard.js').bb; // import a module with no types
var AngularBillboardService = /** @class */ (function () {
    function AngularBillboardService() {
    }
    AngularBillboardService.prototype.generate = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return data.map(function (options) { return bb.generate(options); });
    };
    AngularBillboardService = __decorate([
        Injectable()
    ], AngularBillboardService);
    return AngularBillboardService;
}());
export { AngularBillboardService };
//# sourceMappingURL=angular-billboard.service.js.map