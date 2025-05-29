import { Component, input } from '@angular/core';
import BasicPageComponent from "../../pages/basic-page/basic-page.component";

@Component({
  selector: 'app-card',
  imports: [BasicPageComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  title = input.required<string>();
}
