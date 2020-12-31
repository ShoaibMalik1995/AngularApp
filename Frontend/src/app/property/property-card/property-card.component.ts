import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/IPropertyBase.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']

  //template: `<h1>I am a card.</h1>`,
  //styles: [`h1 {font-weight: normal; color: green; }`]
})

export class PropertyCardComponent {

  @Input() Property: IPropertyBase
  @Input() hideIcons: Boolean

}
