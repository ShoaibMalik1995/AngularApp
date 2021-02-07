import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddPropertyComponent } from './pages/add-property/add-property.component';
import { PropertyDetailResolverService } from './pages/property-detail/property-detail-resolver.service';
import { PropertyListComponent } from './pages/property-list/property-list.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: PropertyListComponent },
    { path: 'add-property', component: AddPropertyComponent },
    { path: 'rent-property', component: PropertyListComponent },
    { path: 'property-detail/:id', component: PropertyListComponent,
      resolve: {prp: PropertyDetailResolverService} },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PropertyRoutingModule {

}
