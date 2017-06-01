import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()
export class ProductDetailGuardService implements CanActivate {
    constructor(private _router: Router) {

    }

    canActivate(_route: ActivatedRouteSnapshot): boolean {
        let id = +_route.url[1].path;
        if (isNaN(id) || id < 1) {
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}