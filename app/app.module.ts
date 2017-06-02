import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'



import { AppComponent }  from './app.component';
import { ProductDetailGuardService } from './products/product-guard.service'

import { AppRoutingModule } from './app-routing.module'
import { ProductModule } from './products/product.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    ProductModule,
    SharedModule
  ],
  exports: [ AppRoutingModule, RouterModule, SharedModule ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
