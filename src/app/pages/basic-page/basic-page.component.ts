import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('felipe');
  nameUpper = signal('FELIPE');
  fullName = signal('fEliPe');

  customDate = signal(new Date());

  tickingDate = effect((onCleanup)=> {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }
    , 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  })
}
