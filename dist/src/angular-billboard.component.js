var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
var AngularBillboardComponent = /** @class */ (function () {
    function AngularBillboardComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.el = elementRef.nativeElement;
    }
    AngularBillboardComponent.prototype.ngOnInit = function () {
        this.renderer.appendChild(this.el, this.chart.element);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularBillboardComponent.prototype, "chart", void 0);
    AngularBillboardComponent = __decorate([
        Component({
            selector: 'angular-billboard',
            template: '<!-- angular-billboard-chart -->'
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], AngularBillboardComponent);
    return AngularBillboardComponent;
}());
export { AngularBillboardComponent };
//# sourceMappingURL=angular-billboard.component.js.map