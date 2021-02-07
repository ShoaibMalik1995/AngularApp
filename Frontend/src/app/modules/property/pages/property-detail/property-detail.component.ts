import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/modules/property/models/Property';
import { HousingService } from 'src/app/modules/property/services/housing.service';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit() {

    //Check User is loggedin
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/user/login']);
    }

    //this.propertyId = Number(this.route.snapshot.params['id']);
    this.propertyId = +this.route.snapshot.params['id']; // Both lines working same cast to a number

    //Two Get the Updated Route Values on Same Componenet
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getPropertyById(this.propertyId).subscribe((data: Property) => {
    //       this.property = data;
    //     })
    //   });

    //The Above Code is not a Good Approach we can get the data using the Route Resolver
    //We have defined a property-detail-resolver to fetch the data
    //In Resolver we have mulitple resolver data so we can get it using the name of the resolver which we have defined in
    //app.module.ts file
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    )

    //Caresoul For Photo Tab
    this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/SliderPhotos/internal-0.jpg',
        medium: 'assets/images/SliderPhotos/internal-0.jpg',
        big: 'assets/images/SliderPhotos/internal-0.jpg'
      },
      {
        small: 'assets/images/SliderPhotos/internal-00.jpg',
        medium: 'assets/images/SliderPhotos/internal-00.jpg',
        big: 'assets/images/SliderPhotos/internal-00.jpg'
      },
      {
        small: 'assets/images/SliderPhotos/internal-1.jpg',
        medium: 'assets/images/SliderPhotos/internal-1.jpg',
        big: 'assets/images/SliderPhotos/internal-1.jpg'
      },{
        small: 'assets/images/SliderPhotos/internal-11.jpg',
        medium: 'assets/images/SliderPhotos/internal-11.jpg',
        big: 'assets/images/SliderPhotos/internal-11.jpg'
      },
      {
        small: 'assets/images/SliderPhotos/internal-2.jpg',
        medium: 'assets/images/SliderPhotos/internal-2.jpg',
        big: 'assets/images/SliderPhotos/internal-2.jpg'
      },
      {
        small: 'assets/images/SliderPhotos/internal-22.jpg',
        medium: 'assets/images/SliderPhotos/internal-22.jpg',
        big: 'assets/images/SliderPhotos/internal-22.jpg'
      }
    ];

  }

}
