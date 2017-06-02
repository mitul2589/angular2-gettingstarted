import { Component } from '@angular/core'
import { IProduct } from './product'
import { OnInit } from '@angular/core'
import { ProductService } from './product.service'

@Component({
    selector: 'product-list',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    listFilter: string = '';
    imageWidth: number = 20;
    imageHeight: number = 20;
    showImage: boolean = false;
    products: IProduct[] = [];
    errorMessage: any[];

    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("product list component initiated");
        this._productService.getProducts()
            .subscribe(productsArr => this.products = productsArr,
            error => this.errorMessage = <any[]>error);

    }

    onRatingClicked(message: string): void {
        this.pageTitle += message;
    }

}