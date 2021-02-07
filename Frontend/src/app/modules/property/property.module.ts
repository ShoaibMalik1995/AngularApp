import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PropertyRoutingModule } from './property.routes';
import { AddPropertyComponent } from './pages/add-property/add-property.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { PropertyCardComponent } from './pages/property-card/property-card.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { AngularModule } from 'src/app/core/modules/angular/angular.module';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { FilterPipe } from 'src/app/core/Pipes/filter.pipe';
import { SortPipe } from 'src/app/core/Pipes/sort.pipe';

@NgModule({
  declarations: [
    AddPropertyComponent,
    PropertyListComponent,
    PropertyCardComponent,
    PropertyDetailComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    PropertyRoutingModule,
    CommonModule,
    AngularModule,
    MaterialModule,
  ],
  providers: [ HousingService ],
  bootstrap: []
})

export class PropertyModule { }
