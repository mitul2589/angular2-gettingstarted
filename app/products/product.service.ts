import { Injectable } from '@angular/core'
import { IProduct } from './product'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'


@Injectable()
export class ProductService {
    productsUrl: string = 'app/products/products.json';
    productDetailUrl: string = 'app/products/product-detail.json';

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productsUrl)
               .map((response: Response) => <IProduct[]>response.json())
               .do(data => console.log(JSON.stringify(data)))
               .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
         return this._http.get(this.productDetailUrl)
                .map((response: Response) => <IProduct>response.json())
                .do(data => console.log(JSON.stringify(data)))
                .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error.json().error);
    }
}