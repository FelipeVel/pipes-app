import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { TextColorPipe } from '../../pipes/text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { CreatorPipe } from '../../pipes/creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    ColorPipe,
    TextColorPipe,
    TitleCasePipe,
    CreatorPipe,
    HeroSortByPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Felipe Velandia')

  isUpper = signal(true);
  toggleCase() {
    this.isUpper.update(isUpper => !isUpper);
  }

  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null);
}
