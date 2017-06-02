import { Component } from '@angular/core';
import { ProductService } from './products/product.service'
import { ProductDetailGuardService } from './products/product-guard.service'


@Component({
    selector: 'pm-app',
    template: `
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
            <li class="active"><a [routerLink]="['/welcome']">Welcome</a></li>
            <li><a [routerLink]="['/products']">Products List</a></li>
            
            </ul>
        </div>
        </nav>
        <router-outlet></router-outlet>
        
    `,
    providers: [ProductService, ProductDetailGuardService] 
})
export class AppComponent { }
