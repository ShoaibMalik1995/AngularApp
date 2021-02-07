import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxGalleryModule } from "@kolkov/ngx-gallery";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    ButtonsModule,
    BsDatepickerModule,
    NgxGalleryModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    ButtonsModule,
    BsDatepickerModule,
    NgxGalleryModule,

  ]
})

export class AngularModule {

}
