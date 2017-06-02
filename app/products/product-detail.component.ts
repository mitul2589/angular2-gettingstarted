import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { OnInit } from '@angular/core'
import { ProductService } from './product.service'
import { IProduct } from './product'

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string;
    product: IProduct;
    errorMessage: any;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {

    }

    ngOnInit(): void {
        this.pageTitle = 'Product Detail: ' + this._route.snapshot.params['id'];
        this._productService.getProduct(this._route.snapshot.params['id'])
            .subscribe(product => this.product = product,
            error => this.errorMessage = <any[]>error);

    }

    goBack(): void {
        this._router.navigate(['/products']);
    }
}