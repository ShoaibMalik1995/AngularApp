import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: any = [
    {
      "Id": 1,
      "Name": "Joe House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 1,
      "Name": "Trump House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 2,
      "Name": "Senate House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 3,
      "Name": "Parliment House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 4,
      "Name": "Steven House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 5,
      "Name": "Obama House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 6,
      "Name": "Kevin House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 7,
      "Name": "Jhon House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 8,
      "Name": "Snow House",
      "Type": "House",
      "Price": 5000000
    },
    {
      "Id": 9,
      "Name": "Marken House",
      "Type": "House",
      "Price": 5000000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
