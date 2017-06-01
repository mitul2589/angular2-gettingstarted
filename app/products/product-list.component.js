"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.listFilter = '';
        this.imageWidth = 20;
        this.imageHeight = 20;
        this.showImage = false;
        this.products = [];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("product list component initiated");
        this._productService.getProducts()
            .subscribe(function (productsArr) { return _this.products = productsArr; }, function (error) { return _this.errorMessage = error; });
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            product['starrating'] = product.star * 15;
        }
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map