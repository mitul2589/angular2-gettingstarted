import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service'
import { ProductDetailGuardService } from './product-guard.service'
import { ProductFilterPipe } from './product.pipe'
import { ProductRoutingModule } from './product-routing.module'
import { SharedModule } from '../shared/shared.module'


@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ],
  providers: [ProductService, ProductDetailGuardService],
  declarations: [ 
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
  ],
  exports: [ 
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    
  ]
})
export class ProductModule { }
