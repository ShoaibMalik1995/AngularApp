import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/modules/property/models/Property';
import { HousingService } from 'src/app/modules/property/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private router: Router, private housingService: HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property>|Property {
    const propId = route.params['id'];
    return this.housingService.getPropertyById(+propId).pipe(
      catchError(error => {
        //debugger;
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
